module.exports = {
    entry: ['./app/main.js'],
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ],
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    devServer: {
        port: 3000
    }
};