import { execSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

console.log('=== Running Quality Gate ===\n');

// 1. Check zero dependencies in package.json
console.log('1. Checking dependency constraints in package.json...');
const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
if (pkg.dependencies && Object.keys(pkg.dependencies).length > 0) {
  console.error('❌ Error: External runtime dependencies are not allowed in this project.');
  process.exit(1);
}
console.log('✔ Zero external dependencies verified.\n');

// 2. Syntax / Static Check for JS files
console.log('2. Running syntax check (node --check)...');
function getJsFiles(dir) {
  let results = [];
  try {
    const list = readdirSync(dir);
    for (const file of list) {
      const fullPath = join(dir, file);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        results = results.concat(getJsFiles(fullPath));
      } else if (file.endsWith('.js')) {
        results.push(fullPath);
      }
    }
  } catch (err) {
    // Directory might not exist
  }
  return results;
}

const jsFiles = [...getJsFiles('src'), ...getJsFiles('test'), ...getJsFiles('scripts')];
for (const file of jsFiles) {
  try {
    execSync(`node --check "${file}"`, { stdio: 'pipe' });
    console.log(`  ✔ Syntax valid: ${file}`);
  } catch (err) {
    console.error(`❌ Syntax error in ${file}:`, err.message);
    process.exit(1);
  }
}
console.log('✔ All JavaScript files passed syntax verification.\n');

// 3. Run test suite
console.log('3. Running test suite (node --test)...');
try {
  execSync('node --test', { stdio: 'inherit' });
  console.log('\n✔ All tests passed!');
} catch (err) {
  console.error('\n✖ Tests failed.');
  process.exit(1);
}

console.log('\n=== Gate Passed Successfully ===');
