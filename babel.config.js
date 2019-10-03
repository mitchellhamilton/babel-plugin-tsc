module.exports = {
  overrides: [
    {
      test: /src/,
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
      plugins: ["@babel/plugin-transform-runtime"]
    }
  ]
};
