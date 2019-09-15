/* webpack.config.js ： Webpack 的設定檔 */
 
var path    = require('path');
var webpack = require('webpack');
 
module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,         // 針對所有.css 的檔案作預處理，這邊是用 regular express 的格式
                use: [
                    'style-loader',     // 這個會後執行 (順序很重要)
                    'css-loader'        // 這個會先執行
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(function(){
            // 這裡應該可以設定一些東西，但不是本篇想討論的，有興趣可以 Google 這個 plugin 可以做啥...
        }),
    ]
}