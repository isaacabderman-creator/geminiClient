import { z } from "zod";
export const InteractionSchema = z.object({
  model: z.enum(["gemini-3.5-flash-lite", "gemini-3.5-flash"]),
  status: z.enum([
    "in_progress",
    "requires_action",
    "failed",
    "completed",
    "cancelled",
    "incomplete",
    "budget_exceeded",
    "queued",
  ]),
  output_text: z.string(),
});
export type Interaction = z.infer<typeof InteractionSchema>;
