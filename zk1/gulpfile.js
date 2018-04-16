var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('./css/style.css')
        .pipe(gulp.dest('/dist/'))
})