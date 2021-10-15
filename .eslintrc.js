module.exports = {
  env: {
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  plugins: [
    'import',
  ],
  rules: {
    'import/no-unresolved': ['error', { commonjs: true }],
  },
};
