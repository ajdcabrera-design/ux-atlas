import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';
import { catalogPath, instructionsPath, skillIndex, withIndex } from './skill-index.mjs';

const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const instructions = fs.readFileSync(instructionsPath, 'utf8');

test('the instructions hold the current skill index', () => {
  assert.equal(
    withIndex(instructions, catalog),
    instructions,
    'Run `npm run index` after changing skill-catalog.json.',
  );
});

test('the catalog and the skills folder list the same skills', () => {
  const skillsRoot = path.resolve(path.dirname(catalogPath), 'skills');
  const folders = fs.readdirSync(skillsRoot).filter((name) => fs.existsSync(path.join(skillsRoot, name, 'SKILL.md')));
  assert.deepEqual(Object.keys(catalog.skills).sort(), folders.sort());
});

test('lists skills in catalog order', () => {
  const index = skillIndex({
    skills: {
      later: { order: 20, description: 'Second.' },
      first: { order: 10, description: 'First.' },
    },
  });
  assert.equal(index, '<!-- skill-index -->\n- `first`: First.\n- `later`: Second.\n<!-- /skill-index -->');
});
