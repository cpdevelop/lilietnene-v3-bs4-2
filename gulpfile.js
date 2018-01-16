const gulp = require('gulp');
const requireDir = require('require-dir');
const browserSync =require('browser-sync');
const config = require('./gulp/config')();

requireDir('./gulp/tasks', {recurse: true});


gulp.task('browser-sync',  () =>  {
    browserSync({
        server: {
             baseDir: "src/"  ,     //対象ディレクトリ
            index  : "index.html"      //インデックスファイル
        }
    });
});

gulp.task('bs-reload', () =>  {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'],  () =>  {
    gulp.watch([config.templates,config.dataPath], ['compileHtml']);
});
