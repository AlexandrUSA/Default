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

$('html', './tasks/html', {
	src: ['src/html/*.html', '!src/html/_*.html'],
	dst: 'dist'
});

$('scss', './tasks/scss', {
	src: 'src/scss/main.scss',
	dst: 'dist/css'
});

$('export', './tasks/export', {
	src: ['src/fonts/**', 'src/video/**', 'src/*.*', '!src/*.html'],
	base: 'src',
	dst: 'dist'
});

$('img', './tasks/img', {
	src: ['src/img/*.*', 'src/img/favicon/*.*'],
	base: 'src/img',
	dst: 'dist/img'
});

$('clean', './tasks/clean', {
	dst: 'dist'
});

$('server', './tasks/server', {
	src: './dist',
	w: 'dist/**/*.*'
});

$('svg', './tasks/svg', {
	src: 'src/img/svg/**/*.svg',
	dst: 'dist/img/'
});

$('scripts', './tasks/scripts', {
	src: 'src/js/*.js',
	dst: 'dist/js/'
})

gulp.task('build', gulp.series(gulp.parallel('html', 'scss', 'export', 'img')));

gulp.task('watch', () => {
	gulp.watch('src/html/**/*.html', gulp.series('html'));
	gulp.watch('src/scss/**/*.*', gulp.series('scss'));
	gulp.watch('src/img/**/*.*', gulp.series('img'));
	gulp.watch('src/js/**/*.*', gulp.series('scripts'));
	gulp.watch(['src/fonts/**', 'src/video/**', 'src/*.*', '!src/*.html'], gulp.series('export'));
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'scripts',  'server')));
