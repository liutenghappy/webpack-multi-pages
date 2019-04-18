
//创建打包路径
const createFiles = function () {
    const path = require('path');
    const glob = require('glob');
    let result = [];
    let files = glob.sync(path.join(__dirname, '../src/views/**/*.html'));
    for (let file of files) {
        result.push({
            name: file.match(/\w{0,}(?=\.html)/)[0],
            templatePath: file,
            stylePath: file.replace('html', 'less'),
        })
    }
    return result
}
//插件
const plugins = function () {
    const path = require('path');
    let files = createFiles();
    const glob = require('glob');
    let commonJS = glob.sync(path.join(__dirname, '../utils/*.js'));
    let entries = glob.sync(path.join(__dirname, '../src/views/**/*.js'));
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const CopyPlugin = require('copy-webpack-plugin');

    //单独提取css
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const CleanWebpackPlugin = require('clean-webpack-plugin');

    let htmlPlugins = [];
    let Entries = {};

    let utils=[];


    for(let chunk of [...commonJS,...entries]){
        let chunkname=path.parse(chunk).name;
        Entries[chunkname] =chunk;
    }

    for(let util of [...commonJS]){
        utils.push(path.parse(util).name)
    }



    for (let file of files) {
        htmlPlugins.push(
            new HtmlWebpackPlugin({
                filename: `${file.name}.html`,
                template: file.templatePath,
                chunks: [...utils,file.name]
            })
        )
    }



    return {
        plugins: [
            ...htmlPlugins,
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "./css/[name].css",
                chunkFilename: './css/[id].css',
            }),
            new CopyPlugin([
                {
                    // 源文件目录
                    from: path.join(__dirname, '../static'),
                    // 目标目录 dist目录下
                    to: 'static',
                    // 筛选过滤，这里复制所有文件，连同文件夹
                    ignore: ['.*']
                }
            ])
        ],
        Entries
    }
}

exports.plugins = plugins();