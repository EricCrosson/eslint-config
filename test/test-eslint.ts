import test from 'ava'
import * as fs from 'fs'
const eslint = require('eslint')

function getErrors(configFile: string, fileToTest: string) {
    const CLIEngine = eslint.CLIEngine
    const cli = new CLIEngine({ configFile })
    return cli.executeOnText(fs.readFileSync(fileToTest, 'utf8'))
}

test('should contain a valid eslint config', t => {
    t.deepEqual(getErrors('./test/test-eslint.ts', '../index.js').results[0].messages, [])
})
