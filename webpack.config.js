const path = require('path');

module.exports = {
  // will start from this point when starting the building process
  entry: "./src/index.js",
  output: {
    // directory and file where the file should be generated
    filename: "bundle.js",
    // path: 'dist', // this result in absolute path error,
    path: path.resolve(__dirname, "./dist"), // __dirname is the absolute path to the directory containing the source file
  },
  mode: "none",
  mo