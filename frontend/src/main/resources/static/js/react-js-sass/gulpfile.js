var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

var src = "app";
var target = "build";
var resource ="../../dist";

gulp.task('sass', function () {
  return gulp.src(src + '/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(target));
});

gulp.task('css-compress', ['sass'], function () {
  gulp.src(target + '/styles.css')
    .pipe(cssnano())
    .pipe(gulp.dest(resource));
});

gulp.task('watch', ['css-compress'], function () {
  gulp.watch(src + '/sass/**/*.scss', ['css-compress']);
});

gulp.task('default', ['watch']);