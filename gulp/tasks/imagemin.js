const gulp     = require('gulp');

// 必要なプラグインの読み込み
const changed  = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const imageminJpg = require('imagemin-jpeg-recompress');
const imageminPng = require('imagemin-pngquant');
const imageminGif = require('imagemin-gifsicle');
const svgmin = require('gulp-svgmin');
const del = require('del');

// 圧縮前と圧縮後のディレクトリを定義
const paths = {
  srcDir : 'src',
  dstDir : 'dist'
};


// gulp.task('beginClean', () =>  {
//     return del([
//       'dist/assets/images/',
//     ]);
// });

// jpg,png,gif画像の圧縮タスク
gulp.task('imagemin', () => { //,['beginClean']
    const srcGlob = paths.srcDir + '/**/*.+(jpg|jpeg|png|gif)';
    const dstGlob = paths.dstDir;
    gulp.src( srcGlob )
    .pipe(changed( dstGlob ))
    .pipe(imagemin([
        imageminPng(),
        imageminJpg(),
        imageminGif({
            interlaced: false,
            optimizationLevel: 3,
            colors:180
        })
    ]
    ))
    .pipe(gulp.dest( dstGlob ));
});
// svg画像の圧縮タスク
gulp.task('svgmin',['beginClean'], () => {
    const srcGlob = paths.srcDir + '/**/*.+(svg)';
    const dstGlob = paths.dstDir;
    gulp.src( srcGlob )
    .pipe(changed( dstGlob ))
    .pipe(svgmin())
    .pipe(gulp.dest( dstGlob ));
});


gulp.task('images', ['imagemin','svgmin']);

// defaultで画像圧縮タスクをwatch状態に
// gulp.task('images', () => {
//   gulp.watch(paths.srcDir + '/**/*', ['imagemin','svgmin']);
// });
