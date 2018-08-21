const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: ['./App/main.js'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,  
                exclude: /node_modules/,  
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /flexboxgrid/
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    devServer: {
        contentBase: path.join(__dirname, ''),
        port: 1234
    }
};