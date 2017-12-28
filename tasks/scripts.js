'use strict';

const gulp    = require('gulp'),
			_       = require('gulp-load-plugins')(),
			config  = require('../webpack.config'),
			wpStm   = require('webpack-stream'),
			named   = require('vinyl-named');


module.exports = ( o ) => {
	return () => {
		return gulp.src(o.src)
			.pipe(_.plumber({
				errorHandler: _.notify.onError()
			}))
			.pipe(named())
			.pipe(wpStm(config))
			.pipe(gulp.dest(o.dst))
	};
};
