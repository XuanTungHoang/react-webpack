const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
    favicon: "public/favicon.ico",
    inject: true,
  }),
];
