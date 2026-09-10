import { GoogleGenAI } from "@google/genai";
import { InteractionSchema, type Interaction } from "./schema.js";
import type { ClientError } from "./error.js";

const ai = new GoogleGenAI({});
export const getInteraction = async (
  model: string,
  prompt: string = "Hello",
): Promise<Interaction | ClientError> => {
  let response;
  try {
    response = await ai.interactions.create({
      model: model,
      input: prompt,
    });
  } catch (e) {
    return { type: "network_error", error: e };
  }
  if (response.status === "failed") {
    return {
      type: "http_error",
      status: 500,
      statusText: JSON.stringify(response.errors ?? "Interaction failed"),
    };
  }
  const parsedResult = InteractionSchema.safeParse(response);
  if (!parsedResult.success)
    return { type: "schema_error", issues: [parsedResult.error] };

  return parsedResult.data;
};
