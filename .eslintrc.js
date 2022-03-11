module.exports = {
  env: {
    browser: true,
  },
  extends: ["plugin:vue/base"],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
        ignoreRegExpLiterals: true,
      },
    ],
    "comma-dangle": ["error", "always-multiline"],
    "vue/multi-word-component-names": [0],
  },
};
