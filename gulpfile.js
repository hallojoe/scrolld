var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');
 
gulp.task('default', function (cb) {
  pump([
        gulp.src('src/*.js'),
        uglify(),
        rename({ suffix: '.min' }),
        gulp.dest('dist')
    ],
    cb
  );
});