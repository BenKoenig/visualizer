module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', // Specify the path to your tsconfig.json
    tsconfigRootDir: __dirname
  },
  plugins: ['react'],
  settings: {
    react: {
      version: '18.2.0' // Specify the React version you are using, or use 'detect' to automatically detect the version
    }
  },
  rules: {}
}
