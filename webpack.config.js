const MiniCssExpressPlugin = require('mini-css-extract-plugin')
module.exports = {
    plugins:[new MiniCssExpressPlugin()],
  mode: "development",
  module: {
    rules: [
      {
        // test for loaders: css, scss
        test: /\.(s)?css$/i,
        exclude: /\/node_modules/i,
        use: [MiniCssExpressPlugin.loader, "css-loader", "sass-loader","postcss-loader"], // how do you want me to handle this?
      },
    ],
  },
  devtool:"source-map"
};
