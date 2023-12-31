module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "prettier",
    "turbo",
    "hardcore",
    "hardcore/ts",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
    project: true,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  rules: {
    "import/unambiguous": "off",
    "max-len": "off",
    "sonar/no-wildcard-import": "off",
    "object-curly-spacing": ["error", "always"],
    "import/no-extraneous-dependencies": "off",
    "putout/putout": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "total-functions/require-strict-mode": "off",
    "import/no-unused-modules": "off",
    "import/no-anonymous-default-export": "off",
    "ext/lines-between-object-properties": "off",
    "import/extensions": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "import/max-dependencies": "off",
    "max-statements": "off",
    "prettier/prettier": "off",
    "perfectionist/sort-objects": "off",
    "@typescript-eslint/naming-convention": "off",
    "import/no-namespace": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "sonar/no-empty-after-reluctant": "off",
    quotes: "off",
    "unicorn/no-empty-file": "off",
    "regexp/require-unicode-sets-regexp": "off",
    endOfLine: "off",
  },
  ignorePatterns: [
    "node_modules",
    "dist",
    "public",
    "vite.config.*",
    "tailwind.config.*",
    "svelte.config.*",
    "tsconfig.json",
    "postcss.config.*",
    "playwright.config.*",
    "**/service-worker.*",
    "*.json",
    "*.html",
    ".eslintrc.cjs",
    "**/paraglide/**/*",
  ],
};
