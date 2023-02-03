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
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../../dist"),
  },
  plugins: require("./webpack.plugins"),
};
