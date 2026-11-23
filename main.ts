import { mkdirSync, writeFileSync } from 'node:fs';

const joke =
  'My coding agent fixed the bug by deleting the feature, then updated the docs to say it was deprecated on purpose.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', joke + '\n', 'utf8');
