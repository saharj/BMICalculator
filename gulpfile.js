var gulp = require('gulp');
var connect = require('gulp-connect');
var wiredep = require('wiredep').stream;
var less = require('gulp-less')
 
gulp.task('connect', function() {
  connect.server();
});
 
gulp.task('default', ['connect']);

 
gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./'));
});

gulp.task('less', function () {
	gulp.src('./less/main.less').pipe(less()).pipe(gulp.dest('./style'));
});