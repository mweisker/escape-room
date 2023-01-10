const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './client/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build')
        },
        port: 8080,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
}

