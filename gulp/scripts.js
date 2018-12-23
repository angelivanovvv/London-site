// Define all gulp variables witch is needed
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');


// Object for source folder paths
var SOURCEPATHS = {
    jsSource: 'src/js/**'
};

// Object for app folder paths
var APPPATH = {
    root: 'app/',
    js: 'app/js'
};

gulp.task('scripts', ['clean-scripts'], function() {
    gulp.src(SOURCEPATHS.jsSource)
        .pipe(concat('main.js'))
        .pipe(browserify())
        .pipe(gulp.dest(APPPATH.js));
});

gulp.task('clean-scripts', function() {
    return gulp.src(APPPATH.js + '/*.js', { read: false, force: true })
        .pipe(clean());
});











