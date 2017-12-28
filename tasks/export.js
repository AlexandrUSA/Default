'use strict';

const gulp = require('gulp'),
	_      = require('gulp-load-plugins')();

module.exports = ( o ) => {
	return () => {
		return gulp.src(o.src, {base: o.base, since: gulp.lastRun('export')})
			.pipe(_.newer('dist'))
			.pipe(_.debug({title: 'export'}))
			.pipe(gulp.dest( o.dst ));
	};
};
