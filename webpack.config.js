const path = require('path')
const MiniCssExpressPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js", // entry point
  output: {
    filename: "main.js", // frontend js index
    path: path.resolve(__dirname, "dist"), // path to dist/public
  },
  plugins: [new MiniCssExpressPlugin()], // css extractor
  mode: "development", // mode dev/prod
  module: {
    rules: [
      {
        // test for loaders: css, scss
        test: /\.(s)?css$/i, // test for css & scss
        exclude: /\/node_modules/i, // exclude node_modules
        use: [
          MiniCssExpressPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ], // different types of loaders
      },
    ],
  },
//   devtool: "source-map", // source map. optional
};
