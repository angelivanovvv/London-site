// Define all gulp variables witch is needed
var gulp = require('gulp');
var clean = require('gulp-clean');
var injectPartials = require('gulp-inject-partials');

// Object for source folder paths
var SOURCEPATHS = {
  htmlSource: 'src/*.html',
  htmlPartialSourse: 'src/partial/*.html'
};

// Object for app folder paths
var APPPATH = {
  root: 'app/'
};

gulp.task('html', function() {
  return gulp
    .src(SOURCEPATHS.htmlSource)
    .pipe(injectPartials())
    .pipe(gulp.dest(APPPATH.root));
});

gulp.task('clean-html', function() {
  return gulp
    .src(APPPATH.root + '/*.html', { read: false, force: true })
    .pipe(clean());
});
