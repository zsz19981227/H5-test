var gulp = require('gulp');
var browserSync = require('browser-sync');
var less = require('gulp-less');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: 'page/index.html'
        },
        files: ['src'],
        port: 8088,
        host: "localhost"
    })
})
gulp.task('newLess', function() {
    gulp.src('./src/static/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/static/css'))
})
gulp.task('watch', function() {
    gulp.watch('./src/static/less/*.less', ['newLess'])
})

gulp.task('default', ['server', 'newLess'])