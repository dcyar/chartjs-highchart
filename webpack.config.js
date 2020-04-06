const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: [
      '@babel/polyfill',
      './src/index.js'
    ],
    about: [
      '@babel/polyfill',
      './src/about.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Home',
      myPageHeader: 'Home Header',
      filename: 'index.html',
      template: './public/index.html',
      inject: 'body',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'About me',
      myPageHeader: 'About Me Header',
      filename: 'about.html',
      template: './public/about.html',
      inject: 'body',
      chunks: ['about']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      canPrint: true
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: './public',
    compress: true,
    port: 3000
  }
}
