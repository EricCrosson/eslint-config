const fs = require('fs');
const eslint = require('eslint');

function getErrors(configFile, fileToTest) {

  const cli = new eslint.CLIEngine({
    configFile: configFile,
  });

  return cli.executeOnText(fs.readFileSync(fileToTest, 'utf8'));
}

describe('Validate ESLint configs', () => {
  ['test.js'].forEach((file) => {
    it(`load config ${file} in ESLint to validate all rules are correct`, () => {
      getErrors('index.js', file)
    });
  });
});
