const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('assemble', function() {
    return gulp.src('./assets/*')
        .pipe(concat('data.txt'))
        .pipe(gulp.dest('.'));
});
