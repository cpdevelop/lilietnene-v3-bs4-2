const gulp = require('gulp');
const requireDir = require('require-dir');
const config = require('./gulp/config')();
const browserSync =require('browser-sync');
//const webpack = require('gulp-webpack');

requireDir('./gulp/tasks', {recurse: true});

// gulp.task('webpack',  () => {
//     gulp.src(['./src/js/*.js'])
//       .pipe(webpack('./webpack.config.js'));
// });

gulp.task('browser-sync',  () =>  {
    browserSync({
        server: {
            baseDir: "src/",
            index  : "index.html"
        }
    });
});

gulp.task('bs-reload', () =>  {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'],  () =>  {
    gulp.watch([config.templates, config.dataPath], ['compileHtml']);
    gulp.watch(['./src/**/*.js'], ['webpack']);
    gulp.watch(["src/assets/svg/original/*.svg"], ['sprite']);
    gulp.watch("src/*.html", ['bs-reload']);
    gulp.watch("src/styles/*.sass", ['bs-reload']);
    gulp.watch("src/styles/*/*.sass", ['bs-reload']);
    gulp.watch("src/styles/*.css", ['bs-reload']);
    gulp.watch("src/templates/*.hbs", ['bs-reload']);
    gulp.watch("src/templates/*/*.hbs", ['bs-reload']);
});
