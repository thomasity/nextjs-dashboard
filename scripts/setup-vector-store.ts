import OpenAI from "openai";
import { NextResponse } from "next/server";
import { createReadStream } from "node:fs";
import path from "node:path";


const SYSTEM_PROMPT = `
You are a friendly, concise portfolio assistant.

Primary goals:
- Help visitors quickly understand Thomas’s experience and best projects.
- Recommend what to click next on the website.
- Answer recruiter-style questions clearly.

Style:
- Friendly, confident, not salesy.
- Use bullets when listing.
- Ask at most one question at a time.

Length:
- Keep answers under 120 words unless the user asks for more detail

Accuracy:
- Only use facts from PORTFOLIO_CONTEXT or the conversation.
- If missing info, say "I’m not sure" and offer the closest relevant page.

Boundaries:
- No legal/medical/financial advice.
- Do not request sensitive personal information.
`;


export const runtime = "nodejs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const projectsDataPath = path.join(process.cwd(), "app/data/projects.json");
let projectsFileIdPromise: Promise<string> | null = null;

const ensureProjectsInVectorStore = async (vectorStoreId: string) => {
  if (!projectsFileIdPromise) {
    projectsFileIdPromise = (async () => {
      const file = await openai.files.create({
        file: createReadStream(projectsDataPath),
        purpose: "assistants",
      });
      await openai.vectorStores.files.create(vectorStoreId, { file_id: file.id });
      return file.id;
    })();
  }

  await projectsFileIdPromise;
};

export async function POST(req: Request) {
  const { message } = await req.json();

  const vectorStoreId = process.env.OPENAI_VECTOR_STORE_ID;
  if (!vectorStoreId) {
    return NextResponse.json(
      { error: "Missing OPENAI_VECTOR_STORE_ID" },
      { status: 500 }
    );
  }

  await ensureProjectsInVectorStore(vectorStoreId);

  const response = await openai.responses.create({
    model: "gpt-4.1",
    input: [
      {
        role: "system",
        content:
          "You are a portfolio assistant for Thomas. Use file_search to answer using the resume/projects. If unsure, ask a clarifying question.",
      },
      { role: "user", content: message },
    ],
    tools: [
      {
        type: "file_search",
        vector_store_ids: [vectorStoreId],
        max_num_results: 6,
      },
    ],
    include: ["file_search_call.results"],
  });

  const outputText =
    response.output
      .filter((o: any) => o.type === "message")
      .flatMap((m: any) => m.content)
      .filter((c: any) => c.type === "output_text")
      .map((c: any) => c.text)
      .join("\n\n") || "";

  return NextResponse.json({ text: outputText });
}
