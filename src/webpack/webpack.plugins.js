const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
    favicon: "public/favicon.ico",
    inject: true,
  }),
  new CleanWebpackPlugin(),
];
