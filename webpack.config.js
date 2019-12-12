const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const config = {
        entry: {
            app: ['./src/index.js']
        },
        output: {
            path: path.join(__dirname),
            filename: 'dist/[name].bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname),
                    exclude: /(node_modules)|(dist)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                }
            ]
        }
    }
    if (options.mode === 'development') {
        const template = `${options.topjs}/index.html`;
        config.plugins = [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({ template, inject: false })
        ];
        config.devtool = 'inline-source-map';
        config.devServer = {
            hot: true, // HMR
            stats: {
                color: true
            },
            port: 9000,
            headers: { 'Access-Control-Allow-Origin': '*' }
        }
    }

    return config;
}
