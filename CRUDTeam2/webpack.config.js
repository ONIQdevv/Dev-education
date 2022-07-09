const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // devtool: "source-map",
    entry: './src/init.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/dist/"//указываем папку для файлов катртинок
    },
    module: {
        rules: [
            // {
            //     test: /\.less$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader', 'less-loader']
            //     })
            // }
            // ,
            {
                test: /\.js/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {presets: ["env"]} // добавили пресет для ES6, если бы надо было добавть ещё реакт, то presets: ["env", "react"]
                    }
                ]
            }
        ],
    }

    // ,
    // plugins: [
    //     new ExtractTextPlugin("styles.css")
    // ]
};
module.exports = {
    mode: 'production'
};