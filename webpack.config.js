const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test:  /\.(tsx|ts)?$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.less?$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/,
            }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        hot: true,
        port: 3000,
        open: true,
        contentBase: path.resolve(__dirname, 'dist'),
        // 开发模式下写/就行啦
        publicPath: '/',
    }
}
