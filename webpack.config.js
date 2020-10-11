var ImageminPlugin = require('imagemin-webpack-plugin').default;


module.exports = {
    plugins: [
        new ImageminPlugin({
            pngquant: {
                quality: '95-100'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    syntax: 'postcss-scss',
                    plugins: () => [
                        require('postcss-import'),
                        require('tailwindcss'),
                        require('autoprefixer'),
                    ],
                },
            },
        ],
    },
}