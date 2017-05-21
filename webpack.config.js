var path = require('path');

var PUBLIC_DIR = path.join(__dirname, 'public');
var CLIENT_DIR = path.join(__dirname, 'src');

var config = {
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
   path: PUBLIC_DIR,
   filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'stage-0', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=/public/icons/[name].[ext]"
      }
    ]
  },
  resolve: {
    root: path.resolve(CLIENT_DIR),
    alias: {
      containers: 'js/containers',
      presentation: 'js/presentation',
      pages: 'js/pages',
      styles: 'styles',
      images: 'images'
    },
    extensions: ['', '.js', '.jsx', '.scss']
  }
};

module.exports = config;