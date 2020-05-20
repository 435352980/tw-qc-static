module.exports = {
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "avoid",
  printWidth: 100,
  overrides: [
    {
      files: ".prettierrc",
      options: { parser: "json" },
    },
  ],
};
