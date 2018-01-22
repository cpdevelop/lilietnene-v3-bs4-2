const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const config = require('../config')();
const data = require('gulp-data');
const fs = require("fs");
const regexRename = require('gulp-regex-rename');
const replace = require('gulp-replace');

gulp.task('compileHtml', () => {
	const templateData = {
		},
	options = {
			batch : [config.templatePartialPath],
			helpers : {
            // capitals : (str) => {
            //     return str.toUpperCase();
            // }
        }
		};

	return gulp.src(['src/templates/*.page.hbs'])
    .pipe(data( file => {
          return JSON.parse(fs.readFileSync(config.dataPath));
      }))
		.pipe(handlebars(templateData, options))
		.pipe(regexRename(/\.page\.hbs$/, ".html"))
    .pipe(replace(/\uFEFF/ig, ""))
		.pipe(gulp.dest(config.templateOutputPath));
});

// gulp.task('compileHtml');

//
// http://www.timcodes.net/blog/2017/1/22/front-end-templates
//
