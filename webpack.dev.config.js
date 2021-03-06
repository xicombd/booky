var webpackDevServer = 'webpack-dev-server/client?http://localhost:8090'
var bourbonPaths = require('bourbon').includePaths

module.exports = {
  context: __dirname + '/src',
  entry: {
    index: [
      './index',
      webpackDevServer
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].dist.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.spec.js', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'resolve-url', 'sass']
      },
      {
        test: /(\.png|\.woff|.ttf)$/,
        loaders: ['url'],
        include: __dirname
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  sassLoader: {
    includePaths: [
      __dirname + '/src/styles',
      bourbonPaths
    ],
    indentedSyntax: true
  }
}
