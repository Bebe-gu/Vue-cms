const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    devServer: {
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true
    },
    //第三方模块加载器
    //npm install --save-dev style-loader css-loader
    module: {
        //模块规则
        rules: [{
            //npm i style-loader css-loader -D
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            //npm i less-loader less -D
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            //npm i sass-loader node-sass -D
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            //npm i url-loader file-loader -D
            test: /\.(jpg|png|gif|bmp|jpeg)$/,
            //limit 限制大小 防止转换base64 name=[name].[ext]保持原名和后缀 加[hash:8]防止打包后重名覆盖
            use: 'url-loader?limit=6101&name=[hash:8]-[name].[ext]'
        }, {

            test: /\.(ttf|eot|svg|woff|woff2)$/,
            use: 'url-loader'
        }, {
            //注意 babel-core 和 babel-loader 版本需要一致 babel-core版本6 babel-loader 版本7
            //npm i babel-core babel-loader babel-plugin-transform-runtime -D
            //npm i babel-preset-env babel-preset-stage-0 -D
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            //webpack无法打包vue文件需要npm安装loader  vue-loader版本也需要注意版本14
            // npm i vue-loader vue-template-compiler -D
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    },
    //配置插件节点
    plugins: [
        //启用热更新模块
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            //指定模板页面，去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            //内存中生成的页面名
            filename: 'index.html'
                // title: 'Hot Module Replacement'
        }),
    ],
    //配置引用vue的环境文件 解决only-runtime vue错误
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
}
