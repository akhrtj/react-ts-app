module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: [
    '**/node_modules/**',
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
  ],
  plugin: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'content',
          'each',
          'for',
          'function',
          'if',
          'include',
          'mixin',
        ],
      },
    ],
  },
};
