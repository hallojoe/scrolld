var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');
var webserver = require('gulp-webserver');

gulp.task('default', function (cb) {
  pump([
        gulp.src('src/*.js'),
        uglify(),
        rename({ suffix: '.min' }),
        gulp.dest('dist'),
        gulp.dest('demo')       
      ],
    cb
  ); 
});

gulp.task('serve', function() {
  gulp.src('demo')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      directoryListing: {
        enable:true,
        path: 'demo'
      },
      open: true, 
      port: 8024
    }));
});
