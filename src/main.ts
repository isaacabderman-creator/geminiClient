import * as fs from "fs";
import { createSchema, SCHEMA_PATH } from "./scripts/schemaGenerator.js";

if (!fs.existsSync(SCHEMA_PATH)) createSchema();
