import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import assert from 'node:assert/strict';
import { blobHash, buildIndex, writeIndex } from './scan.mjs';

function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'ux-atlas-scan-'));
  const write = (rel, text) => {
    fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true });
    fs.writeFileSync(path.join(root, rel), text);
  };
  write('src/components/button.tsx', [
    'export interface ButtonProps {',
    '  variant?: string;',
    '  loading: boolean;',
    '}',
    'const buttonVariants = cva("", {',
    '  variants: {',
    '    variant: {',
    '      default: "",',
    '      destructive: "",',
    '    },',
    '  },',
    '});',
    'export const Button = () => null;',
    '',
  ].join('\n'));
  write('src/ds/Surface.astro', '---\ninterface Props {\n  href?: string;\n}\n---\n<div />\n');
  write('src/pages/billing.tsx', 'export default function Billing() { return null; }\n');
  write('src/styles/theme.css', ':root {\n  --background: 0 0% 100%;\n  --destructive: 0 84% 60%;\n}\n');
  write('node_modules/lib/Ignored.tsx', 'export const Ignored = () => null;\n');
  write('src/components/button.test.tsx', 'export const NotAComponent = 1;\n');
  write('.atlas/handoff/2026-10-01T00-00Z-billing.md', '```yaml\nhandoff: billing\n```\n');
  return root;
}

test('lists components with props and variants, routes, tokens, and handoffs', () => {
  const { markdown } = buildIndex(fixture());
  assert.match(markdown, /button\.tsx — Button — props: variant loading — variants: variant\(default\|destructive\)/);
  assert.match(markdown, /Surface\.astro — Surface — props: href/);
  assert.match(markdown, /- src\/pages\/billing\.tsx/);
  assert.match(markdown, /src\/styles\/theme\.css: --background --destructive/);
  assert.match(markdown, /- \.atlas\/handoff\/2026-10-01T00-00Z-billing\.md/);
  assert.match(markdown, /DESIGN\.md: absent/);
});

test('skips dependencies and test files', () => {
  const { markdown } = buildIndex(fixture());
  assert.doesNotMatch(markdown, /Ignored/);
  assert.doesNotMatch(markdown, /NotAComponent/);
});

test('the fingerprint changes only for the file that changed', () => {
  const root = fixture();
  const before = buildIndex(root).fingerprint;
  fs.appendFileSync(path.join(root, 'src/ds/Surface.astro'), '<span />\n');
  const after = buildIndex(root).fingerprint;
  const changed = after.filter((line) => !before.includes(line));
  assert.deepEqual(changed.map((line) => line.split(' ')[0]), ['src/ds/Surface.astro']);
});

test('hashes match git blob hashes', (t) => {
  const content = Buffer.from('export const Button = () => null;\n');
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'ux-atlas-hash-'));
  const file = path.join(root, 'button.tsx');
  fs.writeFileSync(file, content);
  let expected;
  try {
    expected = execFileSync('git', ['hash-object', '--no-filters', file], { encoding: 'utf8' }).trim();
  } catch {
    t.skip('git is not available');
    return;
  }
  assert.equal(blobHash(content), expected);
});

test('writes the index and fingerprint under .atlas/scan', () => {
  const root = fixture();
  const { files } = writeIndex(root);
  assert.ok(fs.existsSync(path.join(root, '.atlas/scan/index.md')));
  const lines = fs.readFileSync(path.join(root, '.atlas/scan/index.fingerprint'), 'utf8').trim().split('\n');
  assert.equal(lines.length, files);
});
