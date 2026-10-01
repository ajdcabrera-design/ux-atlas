#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const START = '<!-- ux-atlas -->';
const END = '<!-- /ux-atlas -->';
const instructions = 'node_modules/ux-atlas/instructions/AGENTS.md';
const skills = 'node_modules/ux-atlas/skills/**/SKILL.md';

export const agentsBlock = `${START}
Follow ${instructions}. Skills are in ${skills}.
${END}
`;

export const claudeBlock = `${START}
@${instructions}
${END}
`;

export const briefLine =
  'On every request, with no exemption, read `skills/brief/SKILL.md` and follow it before any other skill. It does not choose the next skill.';

export const recordConfig = '{\n  "record": "ask"\n}\n';

export const recordGuide = [
  '# UX Atlas record',
  '',
  'UX Atlas can keep a living record of design decisions, assumptions, trade-offs, and open design-system gaps.',
  '',
  'Change `.atlas/config.json` to choose when the record is written:',
  '',
  '```json',
  '{',
  '  "record": "ask"',
  '}',
  '```',
  '',
  '- `ask` is the default. Atlas asks before writing the record.',
  '- `on` writes the record automatically after an eligible run.',
  '- `off` leaves the record in the reply and writes no record files.',
  '',
  'The record lives in `.atlas/runs/`, with active decisions in `.atlas/decisions.md` and open gaps in `DESIGN_GAPS.md`.',
  '',
].join('\n');

function packageRoot() {
  return path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
}

export function shouldSkip() {
  if (process.env.npm_config_global === 'true') return true;
  return !packageRoot().split(path.sep).includes('node_modules');
}

export function resolveProjectRoot() {
  return process.env.INIT_CWD || process.cwd();
}

function upsert(filePath, block) {
  const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  const pattern = new RegExp(`${START}[\\s\\S]*?${END}\\n?`);
  const marked = block.endsWith('\n') ? block : `${block}\n`;
  let next = pattern.test(existing)
    ? existing.replace(pattern, marked)
    : `${existing}${existing.length === 0 ? '' : existing.endsWith('\n') ? '\n' : '\n\n'}${marked}`;
  if (!next.endsWith('\n')) next += '\n';
  fs.writeFileSync(filePath, next);
}

function sameFile(left, right) {
  if (!fs.existsSync(left) || !fs.existsSync(right)) return false;
  const a = fs.statSync(left);
  const b = fs.statSync(right);
  return a.dev === b.dev && a.ino === b.ino;
}

export function applyPointers(projectRoot) {
  const agents = path.join(projectRoot, 'AGENTS.md');
  const claude = path.join(projectRoot, 'CLAUDE.md');
  upsert(agents, agentsBlock);
  if (sameFile(agents, claude)) return;
  upsert(claude, claudeBlock);
}

export function ensureRecordConfig(projectRoot) {
  const directory = path.join(projectRoot, '.atlas');
  const filePath = path.join(directory, 'config.json');
  fs.mkdirSync(directory, { recursive: true });
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, recordConfig);
  const guidePath = path.join(directory, 'README.md');
  if (!fs.existsSync(guidePath)) fs.writeFileSync(guidePath, recordGuide);
}

function ensureBriefLine(filePath) {
  const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  if (existing.includes(briefLine)) return;
  const body = existing.length === 0 ? '' : `\n${existing.replace(/^\n/, '')}`;
  let next = `${briefLine}\n${body}`;
  if (!next.endsWith('\n')) next += '\n';
  fs.writeFileSync(filePath, next);
}

export function installBrief(projectRoot, sourceFile) {
  const destination = path.join(projectRoot, 'skills', 'brief', 'SKILL.md');
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(sourceFile, destination);
  const agents = path.join(projectRoot, 'AGENTS.md');
  const claude = path.join(projectRoot, 'CLAUDE.md');
  ensureBriefLine(agents);
  applyPointers(projectRoot);
  if (!sameFile(agents, claude)) ensureBriefLine(claude);
}

export function findInstalledRoot(start) {
  let dir = path.resolve(start);
  const stop = path.parse(dir).root;
  while (true) {
    if (fs.existsSync(path.join(dir, 'node_modules', 'ux-atlas', 'package.json'))) return dir;
    if (dir === stop) return null;
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

export function runBrief(start, sourceFile) {
  const projectRoot = findInstalledRoot(start);
  if (!projectRoot) return { ok: false, message: 'Install the package first.' };
  try {
    installBrief(projectRoot, sourceFile);
    return { ok: true, message: 'Brief skill added.' };
  } catch {
    return { ok: false, message: 'Could not add the brief skill.' };
  }
}

const invokedDirectly =
  process.argv[1] &&
  fs.realpathSync(process.argv[1]) === fs.realpathSync(fileURLToPath(import.meta.url));

if (invokedDirectly && process.argv.includes('brief')) {
  const source = path.join(packageRoot(), 'optional', 'brief', 'SKILL.md');
  const result = runBrief(resolveProjectRoot(), source);
  if (result.ok) console.log(result.message);
  else {
    console.error(result.message);
    process.exitCode = 1;
  }
} else if (invokedDirectly && !shouldSkip()) {
  try {
    applyPointers(resolveProjectRoot());
    ensureRecordConfig(resolveProjectRoot());
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`ux-atlas: could not write the project pointer. ${message}`);
  }
}
