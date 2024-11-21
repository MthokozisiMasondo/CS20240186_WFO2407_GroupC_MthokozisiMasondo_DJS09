const path = require('path');

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.pack.js",
    path: path.resolve(__dirname, 'public')
  },
 resolve: {
    extensions: [
      ".ts",
      ".js",
      ".json"
    ]
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        exclude: /node_modules/,
        test: /\.ts$/
      }
    ]
  }
};