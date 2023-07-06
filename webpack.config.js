const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode:  process.env.NODE_ENV, //sets the mode for webpack to determine how it optimizes the bundles
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js/, 
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.s[ac]ss/, //.sass or .scss 
        use: [ 
          "style-loader", 'css-loader', 'sass-loader'
        ] 
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      }
      
    ]
  }, 
  plugins: [ new HtmlWebpackPlugin({
    title: 'Development',
    template: 'index.html'
   })
], 
  devServer: { 
    proxy: {
      '/': 'http://localhost:3000'
    }
  }
};
