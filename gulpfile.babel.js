import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

// Benchmark Task
gulp.task('benchmark', () =>
    gulp.src('bench/*.js', {read: false})
        .pipe($.benchmark()));
