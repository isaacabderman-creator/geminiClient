import * as z from "zod";
export type ClientError =
  | { type: "network_error"; error: unknown }
  | { type: "http_error"; status: number; statusText: string }
  | { type: "schema_error"; issues: z.ZodError[] };
