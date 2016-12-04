const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    libraryTarget: 'commonjs2',
    filename: 'check_docker_swarm.js'
  },
  target: 'node',
  plugins: [new webpack.DefinePlugin({ 'global.GENTLY': false })],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
