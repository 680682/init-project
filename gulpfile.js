var 	gulp = require('gulp');
var	sass = require('gulp-sass');
var 	watch = require('gulp-watch');
var	minify = require('gulp-minify-css');
var	myth = require('gulp-myth');


// watch
gulp.task('watch', function () {
	gulp.watch('./sass/**/*.scss', ['css'])
})

// default

gulp.task('css', function() {
// sass 
gulp.src('./sass/style.scss')
.pipe(sass())
// myth
.pipe(myth()) 
.pipe(gulp.dest('./'))
});

gulp.task('default', ['css', 'watch']);
