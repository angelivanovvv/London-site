// Define all gulp variables witch is needed
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// Object for source folder paths
var SOURCEPATHS = {
    sassSource: 'src/scss/*.scss',
    sassApp: 'src/scss/app.scss',
    htmlSource: 'src/*.html',
    htmlPartialSourse: 'src/partial/*.html',
    jsSource: 'src/js/**',
    imgSource: 'src/img/**'
};

// Object for app folder paths
var APPPATH = {
    root: 'app/',
    css: 'app/css',
    js: 'app/js',
    fonts: 'app/fonts',
    img: 'app/img'
};


gulp.task('server', ['sass'], function() {
    browserSync.init([APPPATH.css + '/*.css', APPPATH.root + '/*.html', APPPATH.js + '/*.js'], {
        server: {
            baseDir: APPPATH.root
        }
    });
});

gulp.task('watch', ['server', 'sass', 'clean-html', 'clean-scripts', 'scripts', 'images', 'html'], function() {
    gulp.watch([SOURCEPATHS.sassSource], ['sass']);
    gulp.watch([SOURCEPATHS.jsSource], ['scripts']);
    gulp.watch([SOURCEPATHS.htmlSource, SOURCEPATHS.htmlPartialSourse], ['html']);
});

// N. Gulp default task
gulp.task('default', ['watch']);
