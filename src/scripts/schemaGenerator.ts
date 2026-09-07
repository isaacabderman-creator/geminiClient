import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

import * as fs from "fs/promises";
dotenv.config();

const SCHEMA_PATH = "./schema.json";

type OperationState =
  { status: "done" } | { status: "failed"; message?: string };
const ai = new GoogleGenAI({});

const createSchema = async (
  prompt: string = "hello world",
): Promise<OperationState> => {
  const stream = await ai.interactions.create({
    model: "gemini-3.5-flash-lite",
    input: prompt,
  });

  try {
    await fs.writeFile(SCHEMA_PATH, JSON.stringify(stream, null, 2));
    return { status: "done" };
  } catch (err) {
    if (err instanceof Error) return { status: "failed", message: err.message };
    return { status: "failed" };
  }
};
export { createSchema, SCHEMA_PATH };
