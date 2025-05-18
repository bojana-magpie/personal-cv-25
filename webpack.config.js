const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entryPath = "src";

module.exports = {
    mode: "development",
    entry: `./${entryPath}/js/index.js`,
    devtool: "inline-source-map",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    devServer: {
        open: true,
        hot: false,
        static: {
            directory: path.join(__dirname, entryPath),
            publicPath: "/",
            serveIndex: true,
        },
        devMiddleware: {
            writeToDisk: true,
        },
        compress: true,
        port: 3001,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][ext]",
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: `${entryPath}/index.html`,
            inject: true,
        }),
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
    ],
};