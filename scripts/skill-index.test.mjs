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

// Tokens are estimated at four characters each.
test('the skill index stays under 500 tokens, and no line over 60', () => {
  const lines = skillIndex(catalog).split('\n').filter((line) => line.startsWith('- '));
  assert.ok(lines.join('\n').length <= 500 * 4, 'The skill index is over 500 tokens.');
  for (const line of lines) {
    assert.ok(line.length <= 60 * 4, `This index line is over 60 tokens: ${line}`);
  }
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

test('each skill body stays within its declared budget', () => {
  const skillsRoot = path.resolve(path.dirname(catalogPath), 'skills');
  for (const [name, skill] of Object.entries(catalog.skills)) {
    const file = fs.readFileSync(path.join(skillsRoot, name, 'SKILL.md'), 'utf8');
    const [, frontmatter, body] = file.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    const declared = Number(frontmatter.match(/\n {2}body: (\d+)/)[1]);
    assert.equal(declared, skill.tokenBudget.body, `${name}: the catalog and the skill declare different body budgets.`);
    assert.ok(body.length <= declared * 4, `${name}: the body is over its ${declared}-token budget.`);
  }
});
