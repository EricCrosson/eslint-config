module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['*.d.ts', 'dist/**', '**/node_modules/**'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:ava/recommended',
    'plugin:fp-ts/recommended',
    'plugin:import/errors',
    'plugin:security/recommended',
  ],
  plugins: ['@typescript-eslint', 'fp-ts', 'import', 'json-format', 'security'],
  settings: {
    'import/internal-regex': '^@stratos-trade/',
    // an extremely-verbose way to bring dependencies up in the default sort-order
    'json/sort-package-json': [
      'name',
      'displayName',
      'version',
      'private',
      'description',
      'categories',
      'keywords',
      'homepage',
      'bugs',
      'repository',
      'funding',
      'license',
      'author',
      'maintainers',
      'contributors',
      'publisher',
      'sideEffects',
      'type',
      'imports',
      'exports',
      'main',
      'umd',
      'jsdelivr',
      'unpkg',
      'module',
      'source',
      'jsnext',
      'browser',
      'types',
      'typesVersions',
      'typings',
      'style',
      'example',
      'examplestyle',
      'assets',
      'bin',
      'man',
      'directories',
      'engines',
      'engineStrict',
      'files',
      'workspaces',
      'binary',
      'scripts',
      'betterScripts',
      'contributes',
      'activationEvents',
      'prettier',
      'husky',
      'lint-staged',
      'pre',
      'pre-commit',
      'commitlint',
      'lint',
      'config',
      'dependencies',
      'devDependencies',
      'dependenciesMeta',
      'peerDependencies',
      'peerDependenciesMeta',
      'optionalDependencies',
      'bundledDependencies',
      'bundleDependencies',
      'extensionPack',
      'extensionDependencies',
    ],
    'json/ignore-files': ['**/package-lock.json', '**/dist/**'],
    // default setting minus tsconfig.json
    'json/json-with-comments-files': ['.vscode/**'],
  },
  rules: {
    // TODO: flush out the remaining eslint rules
    'quote-props': [
      'error',
      'as-needed',
      {
        numbers: true,
      },
    ],
    /**
     * @typescript-eslint rules
     */
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        checkCompoundAssignments: true,
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/prefer-function-type': 'error',

    // API definition
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',

    // import cycles
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',

    // nullish coalescing
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: false,
        ignoreMixedLogicalExpressions: false,
      },
    ],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    // A+ Promise rules
    '@typescript-eslint/promise-function-async': 'error',
    'prefer-promise-reject-errors': 'error',
    'no-promise-executor-return': 'error',
    'require-atomic-updates': 'error',

    quotes: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
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
        argsIgnorePattern: '^_',
      },
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true,
      },
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
        generics: 'never',
        tuples: 'always-multiline',
        enums: 'always-multiline',
      },
    ],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['off'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',

    // Leaving this as a warn because I don't know what it does,
    // so I want to see what triggers it
    '@typescript-eslint/prefer-namespace-keyword': 'warn',

    /**
     * ava rules
     */
    'ava/use-test': 'off',

    /**
     * fp-ts rules
     */
    'fp-ts/no-lib-imports': 'error',
    'fp-ts/no-pipeable': 'error',
    'fp-ts/no-module-imports': 'off',
    'fp-ts/no-redundant-flow': 'error',
    'fp-ts/prefer-traverse': 'error',
    'fp-ts/prefer-chain': 'error',
    'fp-ts/prefer-bimap': 'off',

    /**
     * import rules
     *
     * I would rather use the following configuration
     * ```
     *    "sort-imports": [
     *      "error",
     *      {
     *        "memberSyntaxSortOrder": ["none", "single", "all", "multiple"],
     *        "allowSeparatedGroups": true
     *      }
     *    ],
     * ```
     *
     * Which separates the named imports from the namespace imports,
     * but it does not currently support `--fix`. In accordance
     * with the goals of this project, I will go with the
     * below `alphabetize` config which inter-mingles the named and
     * namespace imports and supports auto-fixing.
     *
     * ```
     * 'import/order': [
     *   'error',
     *   {
     *     alphabetize: {
     *       order: 'asc',
     *       caseInsensitive: false
     *     }
     *   ]
     * ```
     */
    'no-multiple-empty-lines': ['error', { max: 1 }],

    'import/no-unresolved': ['off'],
    'import/export': ['error'],
    'import/no-named-as-default': ['error'],
    'import/no-named-as-default-member': ['error'],
    'import/no-mutable-exports': ['error'],
    'import/no-unused-modules': ['error'],
    'import/first': ['error'],
    'import/no-duplicates': ['error'],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
    'import/no-unassigned-import': ['error'],
    'import/no-default-export': ['error'],
    'import/group-exports': ['off'],
    'import/dynamic-import-chunkname': ['off'],

    // security
    'security/detect-unsafe-regex': 'error',
  },
}
