// instanciando módulos
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('uglify', function() {
	return gulp
		.src(['assets/js/src/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/build/src'));
});

gulp.task('sass', function() {
	return gulp
		.src('assets/css/**/*.sass')
		.pipe(sourcemaps.init())
    	.pipe(sass({outputStyle: 'compressed'})
    		.on('error', sass.logError))
    	.pipe(sourcemaps.write('/'))
	    .pipe(gulp.dest('assets/css/build'));
});

gulp.task('watch', function() {
	// Vigiando JS
	gulp.watch('assets/js/**/*.js', function(event) {
        gutil.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('uglify');
    });

    gulp.watch('assets/css/**/*.sass', function(event) {
        gutil.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('sass');
    });
});