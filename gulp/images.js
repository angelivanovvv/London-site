// Define all gulp variables witch is needed
var gulp = require('gulp');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');

// Object for source folder paths
var SOURCEPATHS = {
  imgSource: 'src/img/**'
};

// Object for app folder paths
var APPPATH = {
  root: 'app/',
  img: 'app/img'
};

gulp.task('images', function() {
    gulp
    .src(SOURCEPATHS.imgSource)
    .pipe(newer(APPPATH.img))
    .pipe(imagemin())
    .pipe(gulp.dest(APPPATH.img));
});
