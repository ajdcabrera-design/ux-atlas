#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const START = '<!-- skill-index -->';
const END = '<!-- /skill-index -->';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const catalogPath = path.join(packageRoot, 'skill-catalog.json');
export const instructionsPath = path.join(packageRoot, 'instructions', 'AGENTS.md');

export function skillIndex(catalog) {
  const lines = Object.entries(catalog.skills)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([name, skill]) => `- \`${name}\`: ${skill.description}`);
  return `${START}\n${lines.join('\n')}\n${END}`;
}

export function withIndex(instructions, catalog) {
  const pattern = new RegExp(`${START}[\\s\\S]*?${END}`);
  if (!pattern.test(instructions)) throw new Error(`No ${START} block in the instructions.`);
  return instructions.replace(pattern, () => skillIndex(catalog));
}

const invokedDirectly =
  process.argv[1] &&
  fs.realpathSync(process.argv[1]) === fs.realpathSync(fileURLToPath(import.meta.url));

if (invokedDirectly) {
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  fs.writeFileSync(instructionsPath, withIndex(fs.readFileSync(instructionsPath, 'utf8'), catalog));
}
