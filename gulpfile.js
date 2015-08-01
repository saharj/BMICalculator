var gulp = require('gulp');
var connect = require('gulp-connect');
var wiredep = require('wiredep').stream;
var less = require('gulp-less')
var livereload = require('gulp-livereload');
var Server = require('karma').Server;
var angularProtractor = require('gulp-angular-protractor');


gulp.task('endToEnd', function(){
  gulp.src(['./test/e2e/index.js'])
      .pipe(angularProtractor({
          'configFile': 'protractor.conf.js',
          'args': ['--baseUrl', 'http://127.0.0.1:8080'],
          'autoStartStopServer': true,
          'debug': true
      }))
      .on('error', function(e) { throw e })
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('test:continuous', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();
});
 
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