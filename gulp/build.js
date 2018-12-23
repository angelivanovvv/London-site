var gulp = require('gulp');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var injectPartials = require('gulp-inject-partials');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');

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

gulp.task('compressScripts', function() {
    gulp.src(SOURCEPATHS.jsSource)
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest(APPPATH.js));
});

gulp.task('compressSass', function() {
    sassFiles = gulp.src(SOURCEPATHS.sassSource)
        .pipe(autoPrefixer())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
            .pipe(concat('app.css'))
            .pipe(cssmin())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest(APPPATH.css));
});

gulp.task('compressHtml', function() {
    return gulp.src(SOURCEPATHS.htmlSource)
        .pipe(injectPartials())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(APPPATH.root));
});

gulp.task('build', ['compressHtml', 'compressSass', 'compressScripts']);
