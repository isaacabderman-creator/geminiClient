import * as fs from "fs";
import { RESPONSE, createResponse } from "./scripts/createResponseSample.js";
import { getInteraction } from "./client.js";
if (!fs.existsSync(RESPONSE)) createResponse();

console.log(await getInteraction("gemini-3.5-flash-lite", "How ya doing?"));
