const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '../build'),
		publicPath: '/',
		filename: '[name].[contenthash].js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				type: 'asset',
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template: './public/index.html',
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'node_modules/@microblink/blinkid-in-browser-sdk/resources' },
			],
		}),
	],
};
