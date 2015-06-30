var gulp = require('gulp');
var connect = require('gulp-connect');
var wiredep = require('wiredep').stream;
var less = require('gulp-less')
var livereload = require('gulp-livereload');
 
gulp.task('connect', ['watch'], function() {
  connect.server();
});
 
gulp.task('default', ['connect']);

 
gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./'));
});

gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('style'))
    .pipe(livereload());
});

gulp.task('html', function() {
	gulp.src('index.html')
		.pipe(livereload());
});

gulp.task('js', function() {
	gulp.src('./js/*.js')
		.pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('less/*.less', ['less']);
  gulp.watch('index.html', ['html']);
  gulp.watch('js/*.js', ['js']);
});