const fs = require('node:fs');
const test = require('node:test');

const eslint = require('eslint');

function getErrors(configFile, fileToTest) {
  const cli = new eslint.CLIEngine({
    configFile: configFile,
  });
  return cli.executeOnText(fs.readFileSync(fileToTest, 'utf8'));
}

test('should run eslint over test.js to validate all rules are correct', () => {
  getErrors('index.js', 'test.js');
})
