var webpack = require('webpack');
var path = require('path');

var isProduction = process.env.NODE_ENV === 'production';
var definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  },
});
var isHot = !!process.env.HOT;

module.exports = {
  debug: !isProduction,

  devtool: isProduction ? 'source-map' : 'eval',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: {
    'index.ios': !isHot ?
      ['./src/index'] :
      [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:8082',
        'react-native-webpack-server/hot/entry',
        './src/index'
      ]
  },
  // externals: [require("./ignored-modules")],
  // externals: {
  //   'react-native': true
  // },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: !isHot ?
          ['babel'] :
          ['react-hot?native', 'babel']
      }
    ]
  },
  plugins: isProduction ? [
    new webpack.NoErrorsPlugin(),
    definePlugin,
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    })
  ] : [
    new webpack.NoErrorsPlugin(),
    definePlugin,
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: __dirname,
    filename: '[name].js',
    publicPath: !isHot ? '': 'http://localhost:8082/'
  }
};
