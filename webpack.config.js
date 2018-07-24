module.exports = {
    entry: ['./App/main.js'],
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, 
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,  
                exclude: /node_modules/,  
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /flexboxgrid/
            }
        ]
    },
    devServer: {
        port: 1234
    }
};