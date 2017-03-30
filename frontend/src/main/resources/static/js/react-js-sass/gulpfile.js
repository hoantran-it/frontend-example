var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var src = "app";
var target = "build";
var resource = "../../dist";

gulp.task('react', function () {
  return browserify({entries: src + '/js/app.js', extensions: ['js'], debug: true})
    .transform('babelify', {
      presets: ['es2015', 'react', 'stage-0'],
      plugins: ["transform-object-assign"]
    })
    .bundle()
    .on('error', function (err) {
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(target));
});

gulp.task('sass', function () {
  return gulp.src(src + '/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(target));
});

gulp.task('js-compress', ['react'], function () {
  gulp.src(target + '/bundle.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(resource));
});

gulp.task('css-compress', ['sass'], function () {
  gulp.src(target + '/styles.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(resource));
});

gulp.task('watch', ['js-compress', 'css-compress'], function () {
  gulp.watch(src + '/js/**/*.js', ['js-compress']);
  gulp.watch(src + '/sass/**/*.scss', ['css-compress']);
});

gulp.task('default', ['watch']);