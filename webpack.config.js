const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: "./index",
    output: {
        filename: "bundle_[contenthash].js",
        path: resolve(__dirname, "dist"),
        library:"myLib",
        libraryTarget:"var"
    },
    context: resolve(__dirname, "src"),
    watch: true,
    watchOptions:{
        ignored: "/node_modules/",
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "WebpackPractice",
            template: "index.html",
            css:'/src/style.css'
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use: ['style-loader','css-loader'],
            }
        ]
    }
};