var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');


gulp.task('clean.dev', function() {
  return del(['../dev'], {force: true});
});

gulp.task('copy.html.to.dev', function() {
  return gulp.src('../app/**/*.html', {base: '../app'})
    .pipe(gulp.dest('../dev'));
});

gulp.task('copy.css.to.dev', function() {
  return gulp.src('../app/**/*.css', {base: '../app'})
    .pipe(gulp.dest('../dev'));
});

gulp.task('copy.images.to.dev', function() {
  return gulp.src('../app/**/*.svg', {base: '../app'})
    .pipe(gulp.dest('../dev'));
});

gulp.task('build.dev', function(done) {
    runSequence('copy.html.to.dev', 'copy.css.to.dev', 'copy.images.to.dev', function() {
    done();
    });
});