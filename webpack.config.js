const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const babelPropertiesPlugin = require('@babel/plugin-syntax-class-properties')
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist"),
        libraryTarget: 'var',
        library: 'Notify'
    },
    devServer: {
        contentBase: './dist',
        port: 4500
    },
    plugins: [new HtmlWebpackPlugin({ title: 'The Notify Examples' }), new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader']
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