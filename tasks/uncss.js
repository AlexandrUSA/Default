'use strict';

const gulp  = require('gulp'),
	  uncss = require('gulp-uncss');


module.exports = ( o ) => {
	return () => {
		return gulp.src( o.src )
		.pipe(uncss({
			html: o.html
		}))
		.pipe(gulp.dest( o.dst ));
	};
};