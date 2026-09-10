import * as fs from "fs";
import { RESPONSE, createResponse } from "./scripts/createResponseSample.js";
import { getInteraction } from "./client.js";
import readlineSync from "readline-sync";
if (!fs.existsSync(RESPONSE)) createResponse();

const userInput = readlineSync.question("User: ").trim();
const response = await getInteraction("gemini-3.5-flash-lite", userInput);

if ("type" in response) {
  switch (response.type) {
    case "http_error":
      console.log("HTTP Error: ", response.status, response.statusText);
      break;
    case "schema_error":
      console.log("Schema Error: ", response.issues);
      break;
    case "network_error":
      console.log("Network Error: ", response.error);
      break;
  }
} else {
  console.log("AI: ", response.output_text);
}