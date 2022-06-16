const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const devConfig = {
	mode: 'development',
	devServer: {
		static: {
			directory: path.join(__dirname, '../dist'),
		},
		historyApiFallback: true,
		compress: true,
		port: 8081,
		open: true,
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
	devtool: 'eval-source-map',
};
module.exports = merge(common, devConfig);
