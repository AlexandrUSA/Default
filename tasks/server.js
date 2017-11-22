'use strict';

const gulp = require('gulp'),
	bSync  = require('browser-sync');

module.exports = (o) => {
	return () => {
		bSync.init({
			server: {
				baseDir: o.src
			},
			notify: false
		});
		bSync.watch(o.w).on('change', bSync.reload);
	};
};
