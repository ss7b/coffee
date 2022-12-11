const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    entry: {
       'app': './src/index.js',
    },
    output: {
        path: path.join(__dirname,  "/app"),
        publicPath: '',
        filename: '[name].js',
        clean: true,
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    devServer: {
        port: 8080,
        hot: true,
        open: true,
        static: {
           directory: path.join(__dirname, '/app'),
         },
         devMiddleware: {
            writeToDisk: true
          }
      },
      performance: {hints: false,},
// modules
module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
              MiniCssExtractPlugin.loader, 
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ]
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        exclude: /images/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "app/fonts",
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
// plugins
plugins:[
  new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
  }),
  new MiniCssExtractPlugin({filename:"app/css/style.css"}),
  new OptimizeCssAssetsPlugin({}),
],
}