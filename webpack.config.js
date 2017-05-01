var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  // this is something to try out for deployment
  // output: {
  //   filename: '[name].[hash]index.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  devServer: {
  	contentBase: path.join(__dirname, "dist"),
  	compress: true,
  	port: 9000
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [ 
            'es2015' 
          ] 
        }
      }
    ]
  },
};