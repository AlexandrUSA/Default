'use strict';

const gulp = require('gulp');

function $(n, p, o) {
	o = o || {};
	o.n = n;
	gulp.task(n, c => {
		let t = require(p).call(this, o);
		return t( c );
	});
};

$('scss', './tasks/scss', {
	src: 'src/scss/main.scss',
	dst: 'dist/css'
});

$('export', './tasks/export', {
	src: 'src/static/**',
	dst: 'dist'
});

$('clean', './tasks/clean', {
	dst: 'dist'
});

$('server', './tasks/server', {
	src: './dist',
	w: 'dist/**/*.*'
});

$('svg', './tasks/svg', {
	src: 'src/svg/*.svg',
	dst: 'dist/img'
});

$('scripts', './tasks/scripts', {
	src: 'src/js/*.js',
	dst: 'dist/js/'
})

gulp.task('build', gulp.series(gulp.parallel('scss', 'export')));

gulp.task('watch', () => {
	gulp.watch('src/scss/**/*.*', gulp.series('scss'));
	gulp.watch('src/js/**/*.*', gulp.series('scripts'));
	gulp.watch('src/static/**/*.*', gulp.series('export'));
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'scripts',  'server')));
