// Fortune Cookie for the Liquidated Trader
// Writes one fortune-cookie line for a crypto trader who just got
// liquidated, to /output/entry.txt (gate: 1-160 chars, max 20 words).
// The line keeps the classic cookie voice ("You will rise again...")
// and then breaks it: the loss is reframed as a loan the market took
// and never plans to repay, so the joke lands on the loss itself
// without lecturing or pitying the trader. One line, no stock phrases.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "You will rise again, wealthier in wisdom \u2014 the market merely borrowed your money indefinitely.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
