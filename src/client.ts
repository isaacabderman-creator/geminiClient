import { GoogleGenAI } from "@google/genai";
import { InteractionSchema, type Interaction } from "./schema.js";

const ai = new GoogleGenAI({});
export const getInteraction = async (
  model: string,
  prompt: string = "Hello",
): Promise<Interaction> => {
  const response = await ai.interactions.create({
    model: model,
    input: prompt,
  });
  const interaction: Interaction = InteractionSchema.parse(response);

  return interaction;
};
