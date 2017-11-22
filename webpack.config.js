'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development',
      webpack  = require('webpack');


module.exports = {
	context: __dirname + '/src/js',
	entry: {
		main: './main'
	},
	output: {
		path: __dirname + '/dist/js',
		publicPath: __dirname + '/dist/js/',
		filename: '[name].js',
		library: "[name]"
	},
	watch: NODE_ENV !== 'development',
	watchOptions: {
		aggregateTimeout: 100
	},
	devtool: NODE_ENV == 'dev' ? 'eval' : false,
	resolve: {
		modules: ["node_modules"],
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules|bower_components/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
    }]
	},
	plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
			LANG: JSON.stringify('ru')
		}),
		new webpack.optimize.CommonsChunkPlugin({
      		name: "common"
   	})
    ]
};
