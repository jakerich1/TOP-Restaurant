const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.js',
        home: './src/components/home.js',
        menu: './src/components/menu.js',
        contact: './src/components/contact.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            inject: 'body',
            title: 'TOP Restaurant Page Project',
        }),
    ],
    module: {
        rules: [{
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader", ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};