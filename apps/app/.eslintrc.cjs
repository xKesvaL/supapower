module.exports = {
  extends: ["custom"],
  rules: {
    // These next 2 rules are needed because of the way Svelte does its exports for props
    // They're only here because in the application, we're using Svelte 5 which does it differently
    "import/no-mutable-exports": "off",
    "init-declarations": "off",
  },
};
