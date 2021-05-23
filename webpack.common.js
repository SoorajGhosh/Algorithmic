const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
	module:{
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
			{
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader',"sass-loader"],
      },
    ],
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/html/template.html",
		})
	],
}