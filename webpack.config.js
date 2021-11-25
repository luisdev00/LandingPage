const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    clean: true,
    path: path.resolve(__dirname, "./dist"),
    filename: "main_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
          minimize: true,
        },
      },
    ],
  },
  plugins: [new HtmlWebPackPlugin(
    {
      template: './public/index.html',
     
    }
  )],
};
