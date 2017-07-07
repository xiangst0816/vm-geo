const path = require('path')
const version = require('./package.json').version
var webpack = require('webpack')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
export default () => (
  {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'vm-geo.min.js',
      libraryTarget: 'umd',
      library: 'vmGeo'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'}
      ]
    },
    plugins: [
      new UglifyJSPlugin(),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(version)
      })
    ]
  }
)
