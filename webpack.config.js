/* webpack.config.js ： Webpack 的設定檔 */
 
var path    = require('path');
var webpack = require('webpack');

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // Webpack 4 [webpack --mode production] 已會自動壓縮了，不太需要這邊僅作練習
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Webpack 4 改用這個

/* Webpack 4 不支援

var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 使用 extract text webpack plugin
var extractPlugin = new ExtractTextPlugin({ // 建立一個 extract text plugin 的實例
    filename: 'bundle.css' // scss轉css後另存的目標檔名
});

*/
 
module.exports = {
    mode: 'production', // development, production
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,         // 針對所有.css 的檔案作預處理，這邊是用 regular express 的格式
            //     use: [
            //         'style-loader',     // 這個會後執行 (順序很重要)
            //         'css-loader'        // 這個會先執行
            //     ]
            // },
            {
                test: /\.(scss|sass)$/,
                use: [
                    // 需要用到的 loader
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    optimization: {
        // minimizer: [
        //     // we specify a custom UglifyJsPlugin here to get source maps in production
        //     new UglifyJsPlugin({
        //         cache: true,
        //         parallel: true,
        //         uglifyOptions: {
        //             compress: false,
        //             ecma: 6,
        //             mangle: true
        //         },
        //         sourceMap: true
        //     })
        // ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(function(){
        //     // 這裡應該可以設定一些東西，但不是本篇想討論的，有興趣可以 Google 這個 plugin 可以做啥...
        // }),
        // extractPlugin // 把extract過的loader轉存成css檔
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new webpack.ProvidePlugin({ // 利用 webpack.ProvidePlugin 讓 $ 和 jQuery 可以連結到 jquery library
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
    ]
}