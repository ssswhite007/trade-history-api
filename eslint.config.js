export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Add your custom rules here
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
    ignores: ['coverage/', 'node_modules/'],
  },
];
