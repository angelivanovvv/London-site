// Define all gulp variables witch is needed
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

// Object for source folder paths
var SOURCEPATHS = {
  sassSource: 'src/scss/*.scss',
  sassApp: 'src/scss/app.scss'
};

// Object for app folder paths
var APPPATH = {
  root: 'app/',
  css: 'app/css'
};

// 1. Gulp sass - This task is for compile scss files to css files
gulp.task('sass', function() {
  sassFiles = gulp
    .src(SOURCEPATHS.sassApp)
    .pipe(autoPrefixer())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(APPPATH.css));
});
