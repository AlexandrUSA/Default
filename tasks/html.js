'use strict';

const gulp = require('gulp'),
	  _      = require('gulp-load-plugins')(),
	  fileinclude = require('gulp-file-include'),
	  htmlmin = require('gulp-htmlmin'),
	  gpath  = require('path'),
	  devel  = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


module.exports = ( o ) => {
	return () => {
		return gulp.src(o.src)
		.pipe(_.plumber({errorHandler: _.notify.onError()}))
		.pipe(fileinclude({prefix: '@@'}))
		.pipe(htmlmin())
		.pipe(_.debug({title: 'html-export'}))
		.pipe(gulp.dest(o.dst));
	};
};