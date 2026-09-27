import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  agentsBlock,
  applyPointers,
  briefLine,
  claudeBlock,
  findInstalledRoot,
  runBrief,
} from './init.mjs';

const briefSource = path.resolve(import.meta.dirname, '../optional/brief/SKILL.md');

function markInstalled(root) {
  const dir = path.join(root, 'node_modules', 'ux-atlas');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'package.json'), '{"name":"ux-atlas"}\n');
}

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

test('adds the brief in the project and keeps that line across a later pointer write', () => {
  const root = tempProject();
  markInstalled(root);
  fs.writeFileSync(path.join(root, 'AGENTS.md'), '# Project\n');
  const first = runBrief(root, briefSource);
  const again = runBrief(root, briefSource);
  applyPointers(root);
  const text = fs.readFileSync(path.join(root, 'AGENTS.md'), 'utf8');
  const skill = fs.readFileSync(path.join(root, 'skills', 'brief', 'SKILL.md'), 'utf8');
  assert.equal(first.ok, true);
  assert.equal(first.message, 'Brief skill added.');
  assert.equal(again.message, 'Brief skill added.');
  assert.equal(text.split(briefLine).length, 2);
  assert.match(text, new RegExp(`^${briefLine.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n`));
  assert.equal(text.split('<!-- ux-atlas -->').length, 2);
  assert.equal(skill, fs.readFileSync(briefSource, 'utf8'));
  const claude = fs.readFileSync(path.join(root, 'CLAUDE.md'), 'utf8');
  assert.match(claude, new RegExp(`^${briefLine.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n`));
});

test('runs the brief command when invoked through a package bin symlink', () => {
  const root = tempProject();
  markInstalled(root);
  const binDirectory = path.join(root, 'node_modules', '.bin');
  const binPath = path.join(binDirectory, 'ux-atlas');
  fs.mkdirSync(binDirectory, { recursive: true });
  fs.symlinkSync(path.resolve(import.meta.dirname, 'init.mjs'), binPath);

  const output = execFileSync(process.execPath, [binPath, 'brief'], {
    cwd: root,
    env: { ...process.env, INIT_CWD: root },
    encoding: 'utf8',
  });

  assert.equal(output, 'Brief skill added.\n');
  assert.equal(
    fs.readFileSync(path.join(root, 'skills', 'brief', 'SKILL.md'), 'utf8'),
    fs.readFileSync(briefSource, 'utf8'),
  );
  assert.match(fs.readFileSync(path.join(root, 'AGENTS.md'), 'utf8'), new RegExp(briefLine));
});

test('writes the brief from the directory where the package is installed', () => {
  const root = tempProject();
  markInstalled(root);
  const nested = path.join(root, 'src');
  fs.mkdirSync(nested);
  const result = runBrief(nested, briefSource);
  assert.equal(result.ok, true);
  assert.equal(findInstalledRoot(nested), root);
  assert.equal(fs.existsSync(path.join(root, 'skills', 'brief', 'SKILL.md')), true);
  assert.equal(fs.existsSync(path.join(nested, 'skills', 'brief', 'SKILL.md')), false);
});

test('asks for the package install when ux-atlas is not installed', () => {
  const root = tempProject();
  const result = runBrief(root, briefSource);
  assert.deepEqual(result, { ok: false, message: 'Install the package first.' });
  assert.equal(fs.existsSync(path.join(root, 'skills', 'brief', 'SKILL.md')), false);
});

test('reports a failed brief write without adding a second line', () => {
  const root = tempProject();
  markInstalled(root);
  const result = runBrief(root, path.join(root, 'missing-brief.md'));
  assert.deepEqual(result, { ok: false, message: 'Could not add the brief skill.' });
  assert.equal(fs.existsSync(path.join(root, 'AGENTS.md')), false);
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
