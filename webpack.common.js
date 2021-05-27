const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      main:'./src/js/index.js',
      vendor: './src/js/vendor.js'
    },
	module:{
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      }
    ],
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/html/template.html",
		})
	],
}