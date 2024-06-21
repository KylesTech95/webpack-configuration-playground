module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        // test for loaders: css, scss
        test: /\.(s)?css$/i,
        exclude: /\/node_modules/i,
        use: ["style-loader", "css-loader", "sass-loader"], // how do you want me to handle this?
      },
    ],
  },
};
