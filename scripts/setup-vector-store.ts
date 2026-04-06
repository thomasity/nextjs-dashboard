/**
 * Builds a local embeddings store from app/data/projects.json and app/data/resume.json.
 * Run with: npm run chat:store
 * Output: app/data/embeddings.json
 */

import OpenAI from "openai";
import fs from "node:fs";
import path from "node:path";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface Chunk {
  text: string;
  embedding: number[];
}

function buildChunks(): string[] {
  const dataDir = path.join(process.cwd(), "app/data");
  const projects = JSON.parse(fs.readFileSync(path.join(dataDir, "projects.json"), "utf-8"));
  const resume = JSON.parse(fs.readFileSync(path.join(dataDir, "resume.json"), "utf-8"));

  const chunks: string[] = [];

  // One chunk per project
  for (const p of projects) {
    const lines = [
      `Project: ${p.name}`,
      `Year: ${p.year}`,
      p.fields?.length ? `Fields: ${p.fields.join(", ")}` : null,
      p.languages?.length ? `Languages: ${p.languages.join(", ")}` : null,
      p.frameworks?.length ? `Frameworks: ${p.frameworks.join(", ")}` : null,
      p.libraries?.length ? `Libraries: ${p.libraries.join(", ")}` : null,
      p.platforms?.length ? `Platforms: ${p.platforms.join(", ")}` : null,
      p.description ? `Description: ${p.description}` : null,
    ].filter(Boolean) as string[];
    chunks.push(lines.join("\n"));
  }

  // Resume summary
  chunks.push(`About Thomas Callen:\n${resume.summary}`);

  // Education
  for (const e of resume.education) {
    const lines = [
      `Education: ${e.degree} at ${e.school}`,
      e.minor ? `Minor: ${e.minor}` : null,
      e.graduation ? `Graduated: ${e.graduation}` : null,
      e.gpa ? `GPA: ${e.gpa}` : null,
    ].filter(Boolean) as string[];
    chunks.push(lines.join("\n"));
  }

  // Coursework as a single chunk
  const coursework = resume.education[0]?.coursework;
  if (coursework?.length) {
    const lines = coursework.map(
      (c: { title: string; semester: string; year: number; description: string }) =>
        `- ${c.title} (${c.semester} ${c.year}): ${c.description}`
    );
    chunks.push(`Relevant Coursework:\n${lines.join("\n")}`);
  }

  // Work experience — one chunk each
  for (const e of resume.experience) {
    const lines = [
      `Work Experience: ${e.title} at ${e.company}`,
      `Location: ${e.location}`,
      `Duration: ${e.start} to ${e.end ?? "present"}`,
      e.details?.length
        ? `Responsibilities:\n${(e.details as string[]).map((d) => `- ${d}`).join("\n")}`
        : null,
    ].filter(Boolean) as string[];
    chunks.push(lines.join("\n"));
  }

  // Extracurriculars — one chunk each
  for (const e of resume.extracurriculars) {
    const lines = [
      `Extracurricular: ${e.title} at ${e.company}`,
      `Duration: ${e.start} to ${e.end ?? "present"}`,
      e.details?.length
        ? `Details:\n${(e.details as string[]).map((d) => `- ${d}`).join("\n")}`
        : null,
    ].filter(Boolean) as string[];
    chunks.push(lines.join("\n"));
  }

  // Skills — one chunk per category
  for (const s of resume.skills as { title: string; items: string[] }[]) {
    chunks.push(`Skills — ${s.title}: ${s.items.join(", ")}`);
  }

  return chunks;
}

async function embedBatch(texts: string[]): Promise<number[][]> {
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: texts,
  });
  return res.data.map((d) => d.embedding);
}

async function main() {
  console.log("Building chunks from projects.json and resume.json...");
  const chunks = buildChunks();
  console.log(`${chunks.length} chunks to embed.`);

  const batchSize = 20;
  const results: Chunk[] = [];

  for (let i = 0; i < chunks.length; i += batchSize) {
    const batch = chunks.slice(i, i + batchSize);
    const embeddings = await embedBatch(batch);
    for (let j = 0; j < batch.length; j++) {
      results.push({ text: batch[j], embedding: embeddings[j] });
    }
    console.log(`Embedded ${Math.min(i + batchSize, chunks.length)}/${chunks.length}`);
  }

  const outPath = path.join(process.cwd(), "app/data/embeddings.json");
  fs.writeFileSync(outPath, JSON.stringify(results));
  console.log(`Saved ${results.length} embeddings to app/data/embeddings.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
