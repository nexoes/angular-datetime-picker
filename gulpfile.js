var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var nib = require('nib');

gulp.task('default',['watch']);

gulp.task('watch',['styles','scripts'],function(){
  gulp.watch('./source/stylesheets/*.styl',['styles']);
  gulp.watch('./source/javascript/*.js',['scripts']);
});

gulp.task('styles',['copy-sprites','copy-fonts'], function() {
  return gulp.src([
      './source/stylesheets/*.styl'
    ])
    .pipe(stylus({use:nib()}))
    .pipe(concatCss('angular-datetime-picker.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-sprites', function() {
   gulp.src('./source/images/*.{png,jpg}')
   .pipe(gulp.dest('./dist'));
});

gulp.task('copy-fonts', function() {
   gulp.src('./source/fonts/*')
   .pipe(gulp.dest('./dist'));
});

gulp.task('scripts',function(){
  return gulp.src([
    './source/javascript/*.js'
  ])
  .pipe(concat('angular-datetime-picker.js'))
  .pipe(gulp.dest('./dist'))
})
