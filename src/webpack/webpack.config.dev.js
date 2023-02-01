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
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
