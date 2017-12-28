'use strict';

const gulp = require('gulp'),
	  _    = require('gulp-load-plugins')(),
	  imgJ = require('imagemin-jpeg-recompress'),
	  pngq = require('imagemin-pngquant');

module.exports = ( o ) => {
	return () => {
		return gulp.src( o.src, {base: o.base, since: gulp.lastRun('img')} )
			.pipe(_.cache(_.imagemin([
      			_.imagemin.gifsicle({interlaced: true}),
      			_.imagemin.jpegtran({progressive: true}),
				imgJ({
        			loops: 5,
        			min: 65,
        			max: 70,
        			quality:'medium'
      			}),
      			_.imagemin.svgo(),
      			_.imagemin.optipng({optimizationLevel: 3}),
      			pngq({quality: '65-70', speed: 5})
    		],{
      		verbose: true
    	})))
    .pipe(gulp.dest( o.dst ));
	};
};

