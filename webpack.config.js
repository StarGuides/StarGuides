const path = require('path')
require('dotenv').config();
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './client/index.html',
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/',
          },
          headers: { 'Access-Control-Allow-Origin': '*' },
        //   proxy:
        //    [
        //     {
        //         context: [
        //             '/error', 'analytics'
        //         ],
        //         targets: 'http://localhost:3000'
        //     }
        //    ],
          //historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}