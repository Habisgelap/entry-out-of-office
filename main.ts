// The Funniest Out-of-Office — u-kreutzx-the-funniest-out-of-office-054815cf
// Writes a single one-line out-of-office auto-reply (<=140 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Gone until Monday. My inbox is being handled by a man named Greg who does not work here.";

// The gate only accepts UTF-8 text of 1 to 140 characters, not only whitespace.
const text = ENTRY.trim();
if (text.length < 1 || text.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
