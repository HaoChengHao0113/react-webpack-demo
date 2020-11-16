const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "boundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['url-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}