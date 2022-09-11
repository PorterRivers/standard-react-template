import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

import { Configuration as WebpackConfiguration, WebpackPluginInstance } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface UnifiedConfiguration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}

const commonPlugins: WebpackPluginInstance[] = [
	new HtmlWebpackPlugin({
		template: 'src/index.html',
		favicon: 'src/favicon.png',
	}),
	new ForkTsCheckerWebpackPlugin({
		async: false,
	}),
	new ESLintPlugin({
		extensions: ['js', 'jsx', 'ts', 'tsx'],
	}),
];

const commonConfig: WebpackConfiguration = {
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: commonPlugins,
};

const devConfig: UnifiedConfiguration = {
	...commonConfig,
	name: 'development',
	mode: 'development',
	output: {
		publicPath: '/',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'build'),
		},
		client: {
			overlay: false,
			logging: 'none',
		},
		historyApiFallback: true,
		port: 9000,
		hot: true,
	},
	externals: ['crypto'],
};

const prodConfig: WebpackConfiguration = {
	...commonConfig,
	name: 'production',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contenthash].js',
		publicPath: '',
	},
	plugins: [...commonPlugins, new CleanWebpackPlugin()],
};

module.exports = [devConfig, prodConfig];
