var gulp = require('gulp');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/css/*.css', browserSync.reload);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
});

// gulp.task('useref', function(){
//   return gulp.src('app/*.html')
//     .pipe(uglify()) // Uglifies Javascript files
//     .pipe(useref())
//     .pipe(gulp.dest('dist'))
// });

gulp.task('default', function() {
    // gulp.run('browserSync');
    gulp.run('watch');
    // gulp.run('useref');

});