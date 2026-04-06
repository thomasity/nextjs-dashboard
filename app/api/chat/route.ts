import OpenAI from "openai";
import fs from "node:fs";
import path from "node:path";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

const SYSTEM_PROMPT = `
You are a friendly, concise portfolio assistant for Thomas Callen.

Primary goals:
- Help visitors quickly understand Thomas's experience and best projects.
- Answer recruiter-style questions clearly.

Style:
- Friendly, confident, not salesy.
- Use bullets when listing.
- Ask at most one question at a time.

Length:
- Keep answers under 120 words unless the user asks for more detail.

Accuracy:
- Only use facts from the provided context or the conversation.
- If the answer isn't in the context, say "I'm not sure" and offer the closest relevant information.

Boundaries:
- No legal/medical/financial advice.
- Do not request sensitive personal information.
`.trim();

interface Chunk {
  text: string;
  embedding: number[];
}

let cachedChunks: Chunk[] | null = null;

function getChunks(): Chunk[] {
  if (cachedChunks) return cachedChunks;
  const filePath = path.join(process.cwd(), "app/data/embeddings.json");
  if (!fs.existsSync(filePath)) return [];
  cachedChunks = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return cachedChunks!;
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

async function retrieveContext(query: string, topK = 5): Promise<string> {
  const chunks = getChunks();
  if (chunks.length === 0) return "";

  const embeddingRes = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });
  const queryVec = embeddingRes.data[0].embedding;

  const ranked = chunks
    .map((chunk) => ({ text: chunk.text, score: cosineSimilarity(queryVec, chunk.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  return ranked.map((r) => r.text).join("\n\n---\n\n");
}

export async function POST(req: Request) {
  const { message } = await req.json();

  const context = await retrieveContext(message);

  const systemContent = context
    ? `${SYSTEM_PROMPT}\n\nContext:\n${context}`
    : SYSTEM_PROMPT;

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: systemContent },
      { role: "user", content: message },
    ],
  });

  return Response.json({
    text: response.choices[0].message.content ?? "",
  });
}
