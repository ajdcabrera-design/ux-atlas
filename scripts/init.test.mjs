import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  agentsBlock,
  applyPointers,
  briefRemovedMessage,
  claudeBlock,
  ensureRecordConfig,
  legacyBriefLine,
  recordGuide,
  recordConfig,
} from './init.mjs';

function tempProject() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'ux-atlas-init-'));
}

test('creates both native files', () => {
  const root = tempProject();
  applyPointers(root);
  assert.equal(fs.readFileSync(path.join(root, 'AGENTS.md'), 'utf8'), agentsBlock);
  assert.equal(fs.readFileSync(path.join(root, 'CLAUDE.md'), 'utf8'), claudeBlock);
});

test('keeps existing text and does not duplicate the pointer', () => {
  const root = tempProject();
  fs.writeFileSync(path.join(root, 'AGENTS.md'), '# Project\n\nShip on Friday.\n');
  applyPointers(root);
  applyPointers(root);
  const text = fs.readFileSync(path.join(root, 'AGENTS.md'), 'utf8');
  assert.match(text, /^# Project\n\nShip on Friday\.\n/);
  assert.equal(text.split('<!-- ux-atlas -->').length, 2);
  assert.match(text, /node_modules\/ux-atlas\/skills\/\*\*\/SKILL\.md/);
});

test('creates the committed record configuration with ask as the default', () => {
  const root = tempProject();
  ensureRecordConfig(root);
  assert.equal(fs.readFileSync(path.join(root, '.atlas', 'config.json'), 'utf8'), recordConfig);
  assert.equal(fs.readFileSync(path.join(root, '.atlas', 'README.md'), 'utf8'), recordGuide);
});

test('preserves an existing record configuration', () => {
  const root = tempProject();
  const directory = path.join(root, '.atlas');
  const filePath = path.join(directory, 'config.json');
  fs.mkdirSync(directory);
  fs.writeFileSync(filePath, '{"record":"off"}\n');
  ensureRecordConfig(root);
  assert.equal(fs.readFileSync(filePath, 'utf8'), '{"record":"off"}\n');
  assert.equal(fs.readFileSync(path.join(directory, 'README.md'), 'utf8'), recordGuide);
});

test('removes the legacy brief line from both files and keeps the rest', () => {
  const root = tempProject();
  fs.writeFileSync(path.join(root, 'AGENTS.md'), `${legacyBriefLine}\n\n# Project\n`);
  fs.writeFileSync(path.join(root, 'CLAUDE.md'), `${legacyBriefLine}\n# Notes\n`);
  applyPointers(root);
  const agents = fs.readFileSync(path.join(root, 'AGENTS.md'), 'utf8');
  const claude = fs.readFileSync(path.join(root, 'CLAUDE.md'), 'utf8');
  assert.equal(agents.includes(legacyBriefLine), false);
  assert.equal(claude.includes(legacyBriefLine), false);
  assert.match(agents, /^# Project\n/);
  assert.match(claude, /^# Notes\n/);
  assert.equal(agents.split('<!-- ux-atlas -->').length, 2);
});

test('leaves a user skills/brief folder in place', () => {
  const root = tempProject();
  const skill = path.join(root, 'skills', 'brief', 'SKILL.md');
  fs.mkdirSync(path.dirname(skill), { recursive: true });
  fs.writeFileSync(skill, 'mine\n');
  applyPointers(root);
  assert.equal(fs.readFileSync(skill, 'utf8'), 'mine\n');
});

test('the brief command says intake is included and writes nothing', () => {
  const root = tempProject();
  const output = execFileSync(process.execPath, [path.resolve(import.meta.dirname, 'init.mjs'), 'brief'], {
    cwd: root,
    env: { ...process.env, INIT_CWD: root },
    encoding: 'utf8',
  });
  assert.equal(output, `${briefRemovedMessage}\n`);
  assert.equal(fs.existsSync(path.join(root, 'AGENTS.md')), false);
  assert.equal(fs.existsSync(path.join(root, 'skills')), false);
});

test('ships the intake skill and points instructions at it', () => {
  const pkg = path.resolve(import.meta.dirname, '..');
  assert.equal(fs.existsSync(path.join(pkg, 'skills', 'intake', 'SKILL.md')), true);
  assert.equal(fs.existsSync(path.join(pkg, 'optional', 'brief')), false);
  const instructions = fs.readFileSync(path.join(pkg, 'instructions', 'AGENTS.md'), 'utf8');
  assert.match(instructions.split('\n')[0], /skills\/intake\/SKILL\.md/);
});

test('leaves a shared AGENTS.md and CLAUDE.md file as one pointer', () => {
  const root = tempProject();
  fs.writeFileSync(path.join(root, 'AGENTS.md'), '# Project\n');
  fs.symlinkSync('AGENTS.md', path.join(root, 'CLAUDE.md'));
  applyPointers(root);
  const text = fs.readFileSync(path.join(root, 'AGENTS.md'), 'utf8');
  assert.match(text, /^# Project\n/);
  assert.equal(text.includes('@node_modules'), false);
  assert.equal(text.split('<!-- ux-atlas -->').length, 2);
});
