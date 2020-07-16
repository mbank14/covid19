const path  = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry:'./src/index.js',
    output: {
        path : path.resolve(__dirname,'dist'),
        filename : 'js/bundle.js'
    },
    module:{
        rules: [{
            test: /\.sass$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader:'css-loader'
                },
                {
                    loader: 'sass-loader',
                    options:{
                        sourceMap: true,
                        //option...
                    }
                }
            ]
        }]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/mystyles.css'
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ]

}