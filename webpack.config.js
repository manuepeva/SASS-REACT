const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.webpack.js"
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.scss$/],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ],
    },
    devServer: {
        publicPath: "/",
        contentBase: path.join(__dirname, './public'),
        compress: true,
        port: 9000
    }
};