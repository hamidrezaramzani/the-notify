const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
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
            }
        ]
    },


}