import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function createConsumerProject() {
  const projectParent = path.join(path.resolve(packageRoot, '../../..'), 'ux-atlas-predeploy');
  fs.mkdirSync(projectParent, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
  const baseName = `atlas-consumer-${timestamp}`;
  let suffix = 0;

  while (true) {
    const name = suffix === 0 ? baseName : `${baseName}-${suffix}`;
    const projectRoot = path.join(projectParent, name);
    try {
      fs.mkdirSync(projectRoot);
      return projectRoot;
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
      suffix += 1;
    }
  }
}

function skillFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return skillFiles(entryPath);
    return entry.name === 'SKILL.md' ? [entryPath] : [];
  });
}

function run() {
  const stagingRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'ux-atlas-predeploy-'));
  const packDirectory = path.join(stagingRoot, 'pack');
  let projectRoot;

  try {
    fs.mkdirSync(packDirectory);
    projectRoot = createConsumerProject();
    execFileSync('npm', ['pack', '--pack-destination', packDirectory], {
      cwd: packageRoot,
      stdio: 'inherit',
    });

    const tarball = fs.readdirSync(packDirectory).find((name) => name.endsWith('.tgz'));
    assert.ok(tarball, 'npm pack did not create a package tarball');
    fs.writeFileSync(
      path.join(projectRoot, 'package.json'),
      JSON.stringify({ name: 'ux-atlas-install-fixture', private: true }, null, 2) + '\n',
    );

    execFileSync('npm', [
      'install',
      '--ignore-scripts=false',
      '--no-audit',
      '--no-fund',
      path.join(packDirectory, tarball),
    ], {
      cwd: projectRoot,
      stdio: 'inherit',
    });

    const installedPackage = path.join(projectRoot, 'node_modules', 'ux-atlas');
    assert.ok(fs.existsSync(path.join(installedPackage, 'package.json')), 'package was not installed');

    const localSkills = skillFiles(path.join(packageRoot, 'skills'));
    assert.ok(localSkills.length > 0, 'no local skills were found');
    for (const localSkill of localSkills) {
      const relativePath = path.relative(packageRoot, localSkill);
      const installedSkill = path.join(installedPackage, relativePath);
      assert.ok(fs.existsSync(installedSkill), `packaged skill is missing: ${relativePath}`);
      assert.equal(
        fs.readFileSync(installedSkill, 'utf8'),
        fs.readFileSync(localSkill, 'utf8'),
        `packaged skill differs from the checkout: ${relativePath}`,
      );
    }

    const agents = fs.readFileSync(path.join(projectRoot, 'AGENTS.md'), 'utf8');
    const claude = fs.readFileSync(path.join(projectRoot, 'CLAUDE.md'), 'utf8');
    assert.match(agents, /node_modules\/ux-atlas\/instructions\/AGENTS\.md/);
    assert.match(agents, /node_modules\/ux-atlas\/skills\/\*\*\/SKILL\.md/);
    assert.match(claude, /@node_modules\/ux-atlas\/instructions\/AGENTS\.md/);

    console.log(`Install check passed: ${localSkills.length} skills packaged and project pointers created.`);
    console.log(`Consumer project: ${projectRoot}`);
  } catch (error) {
    if (projectRoot) console.error(`Consumer project retained for debugging: ${projectRoot}`);
    throw error;
  } finally {
    fs.rmSync(stagingRoot, { recursive: true, force: true });
  }
}

run();