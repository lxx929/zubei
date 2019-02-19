var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('scss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('scss'));
});

gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(webserver({
            port: 8787,
            livereload: true,
            open: true,
            fullback: 'index.html'
        }));
});
gulp.task('default', gulp.series('scss', 'server', 'watch'));