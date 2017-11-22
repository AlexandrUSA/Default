'use strict';

const gulp   = require('gulp'),
	_        = require('gulp-load-plugins')(),
	wpStm    = require('webpack-stream'),
	webpack  = wpStm.webpack,
	path     = require('path'),
	named    = require('vinyl-named'),
	MinifyPlugin   = require("babel-minify-webpack-plugin"),
	NODE_ENV = process.env.NODE_ENV || 'development',
	opts     = {
		output: {
			publicPath: '/js/'
		},
		watch: NODE_ENV === 'development',
		devtool: (NODE_ENV === 'development') ? 'cheap-source-map' : false,
		module: {
			loaders: [{
				test: /\.js$/,
				include: path.join(__dirname, 'dist'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
		}]},
		plugins: [new webpack.NoEmitOnErrorsPlugin()/*, new MinifyPlugin()*/]
		
	};


module.exports = (o) => {
	return () => {
		return gulp.src(o.src)
			.pipe(_.plumber({
				errorHandler: _.notify.onError()
			}))
			.pipe(named())
			.pipe(wpStm(opts))
			.pipe(gulp.dest(o.dst))
	};
};
