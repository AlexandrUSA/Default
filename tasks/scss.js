'use strict';

const gulp    = require('gulp'),
	  _       = require('gulp-load-plugins')(),
	  devel   = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


module.exports = ( o ) => {
	return () => {
		return gulp.src(o.src)
		.pipe(_.plumber({errorHandler: _.notify.onError()}))
		.pipe(_.if(devel, _.sourcemaps.init()))
		.pipe(_.sass())
		.pipe(_.groupCssMediaQueries())
		.pipe(_.csso())
		.pipe(_.autoprefixer(['last 15 versions', '> 0.2%', 'ie 8'], { cascade: false }))  
		.pipe(_.debug({title: 'csso'}))
		.pipe(_.if(devel, _.sourcemaps.write()))
		.pipe(gulp.dest(o.dst));
	};
};