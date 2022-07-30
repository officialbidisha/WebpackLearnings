const path = require('path');


/**
 * For clean cache mechanism
 */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
/**
 * For updating with md5 in html
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // will start from this point when starting the building process
  entry: "./src/index.js",
  output: {
    // directory and file where the file should be generated
    // filename: "bundle.[contenthash].js", // to handle browser caching.
    filename: "bundle.js",
    // path: 'dist', // this result in absolute path error,
    path: path.resolve(__dirname, "./dist"), // __dirname is the absolute path to the directory containing the source file
    publicPath: ''
  },
  mode: "development",
  module: {

    // an array of specific rules
    rules: [
      {
        test: /\.(ttf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset'
      }, 
      {
        test : /\.(txt)$/,
        type: 'asset/source'
      },
      {
        test: /\.css$/,
        use:[
          // MiniCssExtractPlugin.loader, // this injects the styles produced by css-loader in bundle   \
          'style-loader',  'css-loader' // it just returns the contents of css file after reading it.
        ]
      }, 
      {
        test : /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },

  plugins: [

    new CleanWebpackPlugin(
    //   {
    //   cleanOnceBeforeBuildPatterns:[
    //     // '**/*',
    //   ]
    // }
    ),
    new HtmlWebpackPlugin({
      title: 'Hello World',
      template:'src/index.hbs',
      description: 'Some description',
      
    })
  ]
};
