var gulp = require('gulp');
var gulpIf = require('gulp-if')
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
// var minifyCSS = require('gulp-minify-css');
// var concat = require('gulp-concat')

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir:'app'
    }
  })
})

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/css/*.css', browserSync.reload);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', ['uglify',browserSync.reload]);
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css',cleanCSS())) // Minifies CSS files
    .pipe(gulpIf('*.js',uglify())) // Uglifies Javascript files
    .pipe(gulp.dest('.'))
    // .pipe(gulpIf('!*.html',gulp.dest('dist')))
    // .pipe(gulpIf('*.html',gulp.dest('.')))
});

gulp.task('copy-imgs',function(){
  return gulp.src('app/imgs/*.JPG')
  .pipe(gulp.dest('imgs'))
})

// gulp.task('styles',function(){
//   return gulp.src('*.html')
//     .pipe(concat('styles.min.css'))
//     .pipe(gulp.dest('dist'))
// })

gulp.task('default', ['watch','browserSync','useref','copy-imgs']);