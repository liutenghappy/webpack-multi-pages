const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const webpack = require('webpack');
const path = require('path');

module.exports=merge(common,{
    mode:"development",
    devtool:'inline-source-map',
    devServer:{
        contentBase:path.join(__dirname,'../dist'),
        hot: true,
        port:"3000"
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
})