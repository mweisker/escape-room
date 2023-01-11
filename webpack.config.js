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
        host: 'localhost',
        port: 8080,
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build')
        },
        proxy: {
            '/api/**': {
                target: 'http://localhost:3000',
                secure: false,
            }
        }
    },
    resolve: {
        fallback: { "url": require.resolve("url/"), "fs": false, "crypto": false },
        extensions: ['.js', '.jsx']
    }
}


// "scripts": {
//     "start": "nodemon server/server.js",
//     "build": "NODE_ENV=production webpack",
//     "dev": "NODE_ENV=development webpack-dev-server --open"
//   },

// "start": "nodemon server/server.js --open",
// "build": "NODE_ENV=production webpack",
// "dev": "NODE_ENV=development webpack-dev-server --open"