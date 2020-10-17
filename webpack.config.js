const ImageminPlugin = require('imagemin-webpack-plugin').default;

const isProdution = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    isProdution &&
      new ImageminPlugin({
        pngquant: {
          quality: '95-100',
        },
      }),
  ].filter((value) => !!value), // Removes falsy values from array
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: [
              require('postcss-import'),
              require('tailwindcss'),
              require('autoprefixer'),
            ],
          },
        },
      },
    ],
  },
};
