// The Tired Dark Lord — a 100-word villain monologue.
// Writes the monologue to /output/entry.txt (or argv[2] when given).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MONOLOGUE =
  "Come closer, hero. No — not that close. Mind the knees. Three hundred years I have held this throne, and do you know what undying means? The back pain never dies either. Tonight, when the moon goes black, my legions rise and this world ends. It was meant to end at noon. I moved it. A man needs his — where was I. Ah. Your doom. All arranged. The fire, the screams, the — one moment. [He sits.] There. Now tremble. But quietly. The imps are asleep. As, by rights, should I be. Wake me when it ends.";

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, MONOLOGUE, "utf8");

const words = MONOLOGUE.trim().split(/\s+/).length;
console.log(`wrote ${out}: ${[...MONOLOGUE].length} chars, ${words} words`);
