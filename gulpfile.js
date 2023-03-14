const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');

//  paths
const srcPath = "src/";
const distPath = "dist/";

const path = {
  build: {
    html: distPath,
    css: distPath + "css/",
    js: distPath + "js/",
    images: distPath + "img/",
    fonts: distPath + "fonts/"
  },
  src: {
    html: srcPath + "**/*.html",
    css: srcPath + "sass/styles.scss",
    js: srcPath + "js/**/*.js",
    images: srcPath + "img/**/*.{webp,png,jpeg,jpg,svg,ico}",
    fonts: srcPath + "fonts/**/*.{woff,woff2,eot,ttf}"
  },
  watch: {
    html: srcPath + "**/*.html",
    css: srcPath + "sass/**/*.scss",
    js: srcPath + "js/**/*.js",
    images: srcPath + "img/**/*.{webp,png,jpeg,jpg,svg,ico}",
    fonts: srcPath + "fonts/**/*.{woff,woff2,eot,ttf}"
  },
  clean: "./" + distPath
};

// Production

function html() {
  return src(path.src.html, { base: srcPath })
    .pipe(plumber())
    .pipe(dest(path.build.html, { base: srcPath }));
};

exports.html = html;


// Development

function getBrowserSync() {
  browserSync.init({
    server: {
      baseDir: 'src/',
      notify: false,
    }
  });
};

function getCss() {
  return src('src/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true,
    }))
    .pipe(cleanCss({
      
    }))
    .pipe(sourcemaps.write('.sourcemaps'))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
}

function startWatch() {
  watch('src/**/*.html').on('change', browserSync.reload);
  watch('src/sass/**/*.scss', getCss);
}

exports.browserSync = getBrowserSync;
exports.css = getCss;

exports.default = parallel(getCss, getBrowserSync, startWatch);