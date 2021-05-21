const { src, dest, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

function minifyCSS() {
  return src('src/assets//css/*.css')
    .pipe(cleanCSS({compatibility: 'ie7'}))
    .pipe(dest('dist/assets/css'));
}

function transferFonts() {
  return src('src/assets//fonts/**/*')
    .pipe(dest('dist/assets/fonts'));
}

function transferJS() {
  return src('src/js/*.js')
    .pipe(dest('dist/js/'));
}

function minifyHTML() {
  return src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(dest('dist/'));
}

function compressImages() {
  return src('src/assets/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'V6lb5vfCDdh7L8097LDtqv4cvP5Y2XJw'
    }))
    .pipe(dest('dist/assets/images/'));
}

exports.build = parallel(minifyHTML, minifyCSS, compressImages, transferFonts, transferJS);