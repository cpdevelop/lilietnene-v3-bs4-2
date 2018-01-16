const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

const svg = "src/assets/svg/original/*.svg"; // Original SVG
const copiedDir = "src/assets/svg/original/sprite/";
const generatedCss = "src/assets/svg/original/sprite/css/*.css";
const copiedSvg = "src/assets/svg/original/sprite/css/*.svg";
const destSvg = "src/assets/svg/copied";
const destCss = "src/styles/modules";

const config = {
  mode:{
    css:{
      sprite:'sprite.svg',
      render:{
        css:{
          template:'./gulp/_sprite.css'
        }
      }
    }
  }
};

gulp.task('beginClean', () =>  {
    return del([copiedDir,destSvg]);
});

gulp.task('createSprite',['beginClean'],() => {
    return gulp.src(svg)
      .pipe(svgSprite(config))
      .pipe(gulp.dest(copiedDir));
});

gulp.task('copySpriteGraphic',['createSprite'],() => {
    return gulp.src(copiedSvg)
      .pipe(gulp.dest(destSvg));
});

gulp.task('copySpriteCSS',['createSprite'],() => {
  return gulp.src(generatedCss)
    .pipe(rename('_sprite.scss'))
    .pipe(gulp.dest(destCss));
});

gulp.task('endClean',['copySpriteGraphic', 'copySpriteCSS'],() => {
  return del(copiedDir);
});

gulp.task('icons');
