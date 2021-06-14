const plugins = [
  "babel-plugin-styled-components",
  "@babel/plugin-proposal-class-properties",
]

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: process.env.NODE_ENV === 'test'
    ? ["@babel/plugin-transform-modules-commonjs", ...plugins] : plugins
}