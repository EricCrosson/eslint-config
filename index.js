module.exports = {
  rules: {
    // TODO: flush out the remaining eslint rules
    /**
     * @typescript-eslint rules
     */
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        checkCompoundAssignments: true
      }
    ],
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: false,
        ignoreMixedLogicalExpressions: false
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    quotes: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    /**
     * eslint and prettier get into paren-battles
     */
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['off'],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/await-thenable': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_'
      }
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true
      }
    ],
    '@typescript-eslint/no-inferrable-types': ['error'],
    '@typescript-eslint/no-this-alias': ['error'],
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': ['error'],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
        enums: 'always-multiline'
      }
    ],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['off'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Leaving this as a warn because I don't know what it does,
    // so I want to see what triggers it
    '@typescript-eslint/prefer-namespace-keyword': 'warn',

    /**
     * fp-ts rules
     */
    'fp-ts/no-lib-imports': 'error',
    'fp-ts/no-pipeable': 'error',
    'fp-ts/no-module-imports': 'off',
    'fp-ts/no-redundant-flow': 'error',
    'fp-ts/prefer-traverse': 'error',
    'fp-ts/prefer-chain': 'error',
    'fp-ts/prefer-bimap': 'off'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:ava/recommended',
    'plugin:fp-ts/recommended',
    'plugin:security/recommended'
  ],
  plugins: ['@typescript-eslint', 'fp-ts', 'security']
}
