/*===========================================================================*/
    
const path = require('path');


/* just a shortcut to path.resolve(__dirname, "param") */
const ResolvePath = (relPath) => {
    /* "__dirname" -> current absolute path */
    return path.resolve(__dirname, relPath);
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*===========================================================================*/

module.exports = {
    /* entry point where webpack will start looking for dependencies */
    entry: './src/js/main.js',
    /* output is where the webpack should create all the compiled assets */
    output: {
        /* output => ./dist/js/bundle.js */
        path: ResolvePath('dist'),
        filename: 'js/guess-the-number.js'
    },
    /* mode => production || development ('development' will not compress/minify the code to be faster) */
    mode: 'development',
    devServer: {
        contentBase: './dist'
    },
    /* plugins is an array of all plugins you want to load */
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "./css/guess-the-number.css"
        })
    ],
    /* module.rules is an array of all modules rules you want to use */
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader'
            //     }
            // },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    }
}