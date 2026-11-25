// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
//
// A program/v1 entry: writes a single hilarious line (1-200 UTF-8 chars)
// to /output/entry.txt. The line is embedded in the program, so the
// output is fully deterministic.
//
// The joke: a request for relaxing music gets answered with the one thing
// nobody wants read aloud — the search history — delivered in the calmest
// possible voice. Setup promises comfort; the turn delivers exposure.
// Gate: the entry must be 1-200 UTF-8 characters, not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my smart speaker to play something relaxing, so it read my search history aloud in a spa voice.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

function validate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry line must not be whitespace-only");
  }
}

validate(LINE);
mkdirSync(OUTPUT_DIR, { recursive: true });
// Write only the file; /output itself is never removed.
writeFileSync(OUTPUT_FILE, LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to ${OUTPUT_FILE}`);
