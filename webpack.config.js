const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
      'app': './src/index.js',
      'assets/js/footer':'./src/assets/js/footer.js',
      'assets/js/button':'./src/assets/js/button.js',
      'assets/js/product':'./src/assets/js/product.js',
    },
    output: {
        path: path.join(__dirname,  "/app"),
        publicPath: '/',
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
      performance: {
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js');
        },
        hints: false,
      },
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
              outputPath: "assets/fonts/",
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
      },
      
    ],
  },
// plugins
plugins:[
  new webpack.ProvidePlugin({
    $: "jquery",  
    jQuery: "jquery" 
  }),
  new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
  }),
  new HtmlWebpackPlugin({
    filename: "contact.html",
    template: "./src/contact.html",
    chunks:['app','assets/js/footer']
  }),
  new HtmlWebpackPlugin({
    filename: "aboutus.html",
    template: "./src/aboutus.html",
    chunks:['app','assets/js/footer']
  }),
  new HtmlWebpackPlugin({
    filename: "product-1.html",
    template: "./src/product-1.html",
    chunks:['app','assets/js/footer','assets/js/button','assets/js/product']
  }),
  new HtmlWebpackPlugin({
    filename: "product-2.html",
    template: "./src/product-2.html",
    chunks:['app','assets/js/footer','assets/js/button','assets/js/product']
  }),
  new HtmlWebpackPlugin({
    filename: "product-3.html",
    template: "./src/product-3.html",
    chunks:['app','assets/js/footer','assets/js/button','assets/js/product']
  }),
  new HtmlWebpackPlugin({
    filename: "delivery.html",
    template: "./src/delivery.html",
    chunks:['app','assets/js/footer',]
  }),
  new HtmlWebpackPlugin({ 
    filename: "components/navbar.html",
    template: "./src/components/navbar.html",
    chunks:['app','assets/js/navbar']
  }),
  new HtmlWebpackPlugin({ 
    filename: "components/slider.html",
    template: "./src/components/slider.html",
    chunks:['app']
  }),
  new HtmlWebpackPlugin({ 
    filename: "components/card.html",
    template: "./src/components/card.html",
    chunks:['app']
  }),
  new HtmlWebpackPlugin({ 
    filename: "components/button.html",
    template: "./src/components/button.html",
    chunks:['app']
  }),
  new HtmlWebpackPlugin({ 
    filename: "components/tab.html",
    template: "./src/components/tab.html",
    chunks:['app']
  }),
  new HtmlWebpackPlugin({ 
    filename: "components/heading.html",
    template: "./src/components/heading.html",
    chunks:['app']
  }),
  new HtmlWebpackPlugin({ 
    filename: "components/footer.html",
    template: "./src/components/footer.html",
    chunks:['app','assets/js/footer']
  }),
  new HtmlWebpackPlugin({ 
    filename: "components/textfield.html",
    template: "./src/components/textfield.html",
    chunks:['app',]
  }),
  new HtmlWebpackPlugin({ 
    filename: "components/hero.html",
    template: "./src/components/hero.html",
    chunks:['app',]
  }),
  new MiniCssExtractPlugin({filename:"assets/css/style.css"}),
  new OptimizeCssAssetsPlugin({}),
],
}