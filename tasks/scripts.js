'use strict';

const gulp    = require('gulp'),
	  wpStm   = require('webpack-stream'),
	  webpack = wpStm.webpack,
	  named   = require('vinyl-named');



module.exports = ( o ) => {
	return () => {
		return gulp.src(o.src)
		.pipe(named())
		.pipe(wpStm(require('../webpack.config.js')))
		.pipe(gulp.dest(o.dst))
	};
};