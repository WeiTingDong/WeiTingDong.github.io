var gulp = require('gulp');
var gulpIf = require('gulp-if')
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');

gulp.task('browserSync', function() {
  browserSync({
    server: '.'
  })
})

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/css/*.css', browserSync.reload);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', ['uglify',browserSync.reload]);
});

gulp.task('useref', function(){
  return gulp.src('*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js',uglify())) // Uglifies Javascript files
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['watch','browserSync','useref']);