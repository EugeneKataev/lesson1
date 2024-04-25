const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const livereload = require('gulp-livereload');


const scss = gulpSass(sass);

const BUILD_JS_FOLDER =  './dist/js';
const BUILD_SCSS_FOLDER =  './dist/styles';

const SRC_FOLDER_JS = [
    'src/js/data.js',
    'src/js/functions.js',
    'src/js/app.js'
]
const SRC_FOLDER_SCSS = './src/styles/*.scss'

function watcher() {
    gulp.watch(SRC_FOLDER_SCSS, scssTask);
    gulp.watch(SRC_FOLDER_JS, jsTask);
}

function watchTask() {
    livereload.listen();

    gulp.watch('./dist/**/*').on('change', livereload.changed);
}

function jsTask() {
    return gulp.src(SRC_FOLDER_JS)
        .pipe(concat("scripts.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(BUILD_JS_FOLDER));
}
function scssTask() {
    return gulp.src(SRC_FOLDER_SCSS)
        .pipe(scss())
        .pipe(concat("styles.min.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest(BUILD_SCSS_FOLDER))
}

gulp.task('default', gulp.series(jsTask, scssTask, watcher, watchTask));