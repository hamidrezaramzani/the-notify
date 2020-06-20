const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'notify.js',
        path: path.resolve(__dirname, "dist"),
        libraryTarget: 'var',
        library: 'Notify'
    },
    devServer: {
        contentBase: './dist',
        port: 4500
    },
    plugins: [new HtmlWebpackPlugin({ title: 'The Notify Examples' }), new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
        })]
    }
    ,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },


}