const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/**
 * For clean cache mechanism
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
/**
 * For updating with md5 in html
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // will start from this point when starting the building process
  // entry: "./src/index.js",

  /**
   * For two different entry points.
   */
  entry: {
    "hello-world": "./src/hello-world.js",
    kiwi: "./src/kiwi.js",
  },
  output: {
    // directory and file where the file should be generated
    // filename: "bundle.[contenthash].js", // to handle browser caching.
    /**
     * Use filenames from entry points for the bundles
      * We could also use id, but we want human readable so using this. 
    */
    filename: '[name].[contenthash].js',
    // path: 'dist', // this result in absolute path error,
    path: path.resolve(__dirname, "./dist"), // __dirname is the absolute path to the directory containing the source file
    publicPath: "",
  },
  mode: "production",
  module: {
    // an array of specific rules
    rules: [
      {
        test: /\.(ttf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset",
      },
      {
        test: /\.(txt)$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // this injects the styles produced by css-loader in bundle                                                                                              .js
          "css-loader", // it just returns the contents of css file after reading it.
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    //   {
    //   cleanOnceBeforeBuildPatterns:[
    //     // '**/*',
    //   ]
    // }
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: [
          'hello-world'
      ],
      title: "Hello World",
      template: "src/page-template.hbs",
      description: "Hello world",
    }),

    new HtmlWebpackPlugin({
      filename: 'kiwi.html',
      chunks: ['kiwi'],
      title: "Kiwi",
      template: "src/page-template.hbs",
      description: "Kiwi",
    }),
  ],
};
