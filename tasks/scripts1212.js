'use strict';
const gulp   =  require('gulp'),
	    _      =  require('gulp-load-plugins')(),
	    named  =  require('vinyl-named'),
	    CONFIG =  require('../webpack.config.js'),
	    webpack = require('webpack'),
	    webpack_stream = require('webpack-stream');


module.exports = ( o ) => {
	return () => {
		return webpack_stream(CONFIG, webpack)
        	.pipe(gulp.dest(o.dst));
	};
};
