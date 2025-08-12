const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  target: 'web', // собираем для браузера
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    chunkFormat: 'array-push',
    clean: true,
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/,
          /_tests_/,
          /\.test\.[tj]sx?$/ // не компилируем тесты
        ]
      },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
    ]
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  devtool: false
};
