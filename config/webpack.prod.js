const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin()],
};
module.exports = merge(common, prodConfig);
