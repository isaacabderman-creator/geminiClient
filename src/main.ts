import * as fs from "fs";
import { RESPONSE, createResponse } from "./scripts/createResponseSample.js";
if (!fs.existsSync(RESPONSE)) createResponse();
