module.exports = {
  printWidth: 150,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
