const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
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
                test: /.(css | scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './client/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
            publicPath: '/dist',
          },
          compress: true,
          port: 8080,
          proxy: {
            '/**':'http://localhost:3000/'
          }
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}