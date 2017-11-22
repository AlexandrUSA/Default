'use strict';

const gulp = require('gulp'),
	_      = require('gulp-load-plugins')();

module.exports = ( o ) => {
	return () => {
		return gulp.src(o.src)
		.pipe(_.svgmin())
        .pipe(_.svgSprites({mode: "symbols"}))		
		.pipe(gulp.dest(o.dst));
	}
}

