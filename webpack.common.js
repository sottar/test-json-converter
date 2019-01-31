const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputDir = path.join(__dirname, "dist");

module.exports = {
  entry: [`${__dirname}/src/index.jsx`],
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: "index.html",
      template: "./template.html",
      inject: "body"
    })
  ],
  output: {
    path: outputDir,
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          compact: false
        }
      }
    ]
  }
};
