"use strict";
const webpack = require('webpack'),
			path    = require('path'),
			named   = require('vinyl-named'),
			MinifyPlugin = require("babel-minify-webpack-plugin"),
			HtmlWebpackPlugin = require('html-webpack-plugin'),
			NODE_ENV = process.env.NODE_ENV || 'development',
			PATHS = {
	  			source: path.join(__dirname, 'src'),
	  			build: path.join(__dirname, 'dist')
			},
			opts = {
				output: {
					publicPath: '/js/'
				},
				watch: NODE_ENV === 'development',
				devtool: (NODE_ENV === 'development') ? 'eval-source-map' : false,
				plugins: [
					new webpack.NoEmitOnErrorsPlugin(),
					new webpack.optimize.CommonsChunkPlugin({
						name: 'common'
					}),
					new webpack.ProvidePlugin({
						$: 'jquery',
						jquery: 'jquery',
						Vue: 'vue'
					})
				]
			};
if(NODE_ENV === 'development') {
	opts.plugins.push(
		new webpack.HotModuleReplacementPlugin()
	)
} else {
	opts.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
      compress: {
       warnings: false,
       screw_ie8: true,
       conditionals: true,
       unused: true,
       comparisons: true,
       sequences: true,
       dead_code: true,
       evaluate: true,
       if_return: true,
       join_vars: true
      },
      output: {
        comments: false
      }
		})
	);
}

module.exports = opts;