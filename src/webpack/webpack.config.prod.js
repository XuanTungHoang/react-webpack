const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: require("./webpack.rules"),
  },
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js",
    path: path.resolve(__dirname, "../../dist"),
  },
  plugins: require("./webpack.plugins"),
};
