const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

const svg = "lib/svg/*.svg"; // Original SVG
const copiedDir = "lib/svg/sprite/";
const generatedCss = "lib/svg/sprite/css/*.css";
const copiedSvg = "lib/svg/sprite/css/*.svg";
const destSvg = "src/assets/svg";
const destCss = "src/styles/modules";

const config = {
  mode:{
    css:{
      sprite:'sprite.svg',
      render:{
        css:{
          template:'./gulp/sprite.css'
        }
      }
    }
  }
};

gulp.task('beginClean', () =>  {
    return del([copiedDir,destSvg]);
});

gulp.task('createSprite',['beginClean'],() => {//
    return gulp.src(svg)
      .pipe(svgSprite(config))
      .pipe(gulp.dest(copiedDir));
});

gulp.task('copySpriteGraphic',['createSprite'],() => {//
    return gulp.src(copiedSvg)
      .pipe(gulp.dest(destSvg));
});

gulp.task('copySpriteCSS',['createSprite'],() => {//
  return gulp.src(generatedCss)
    .pipe(rename('_sprite.scss'))
    .pipe(gulp.dest(destCss));
});

gulp.task('endClean',['copySpriteGraphic', 'copySpriteCSS'], () => {//
  return del('lib/svg/sprite');
});

gulp.task('sprite');
