const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./sourcer/styles/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function ComprimejavaScript() {
    return gulp.src('./sourcer/styles/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('sourcer/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}


exports.default = function() {
    gulp.watch('./sourcer/styles/*.scss', {ignoreInitial: false} , gulp.series(compilaSass));
    gulp.watch('./sourcer/styles/scripts/*.js', {ignoreInitial: false} , gulp.series(ComprimejavaScript));
    gulp.watch('./sourcer/styles/images/*', {ignoreInitial: false} , gulp.series(comprimeImagens));
}

