const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: require("./webpack.rules"),
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: "/",
  },
  plugins: require("./webpack.plugins"),
};
