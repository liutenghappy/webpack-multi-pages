const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin(
            {
                sourceMap: true
            }
        ),
        new OptimizeCSSAssetsPlugin()
    ]
})