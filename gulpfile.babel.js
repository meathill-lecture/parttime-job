const gulp = require('gulp');
const del = require('del');
const stylus = require('gulp-stylus');
const clean = require('gulp-clean-css');
import {compiler} from 'reveal-markdown-compiler';
const DOC = 'docs/';

gulp.task('clear', () => {
  return del(`${DOC}*`);
});

gulp.task('stylus', () => {
  return gulp.src('styl/screen.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(clean({
      level: 2
    }))
    .pipe(gulp.dest(`${DOC}css/`));
});

gulp.task('copy', () => {
  return gulp.src('img/**')
    .pipe(gulp.dest(`${DOC}img/`));
});

gulp.task('html', () => {
  return compiler('index.dev.html', 'content.md', `${DOC}index.html`);
});

gulp.task('default', gulp.series(
  'clear',
  gulp.parallel('html', 'stylus', 'copy', taskDone => taskDone()),
  taskDone => taskDone(),
));
