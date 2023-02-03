module.exports = [
  {
    // babel loader
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    },
  },
  {
    // css loader
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  },
  {
    // html loader
    test: /\.html$/,
    use: ["html-loader"],
  },
  {
    // Images Loader
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
    // dependency: { not: ["url"] },
    use: {
      loader: "file-loader",
      options: {
        name: "[name][hash].[ext]",
      },
    },
  },
];
