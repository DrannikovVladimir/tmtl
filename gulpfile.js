const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssbeautify = require('gulp-cssbeautify');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

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
    css: srcPath + "scss/style.scss",
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
    .pipe(dest(path.build.html));
};

function css() {
  return src("src/scss/style.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    // .pipe(cssbeautify())
    
    // .pipe(dest(path.build.css))
    .pipe(cssnano({
      zindex: false,
      discardComments: {
        removeAll: true
      }
    }))
    .pipe(sourcemaps.write('.sourcemaps'))
    .pipe(dest("dist/css/"));
};

function js() {
  return src(path.src.js, { base: srcPath + "js/" })
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest(path.build.js));
};

function getWebp() {
  return src('src/img/**/*.{png,jpg}')
    .pipe(webp({
      quality: 85
    }))
    .pipe(dest('dist/img/'))
};

function images() {
  return src(path.src.images, { base: srcPath + "img/" })
    .pipe(imagemin([
      imagemin.mozjpeg({quality: 80, progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(dest(path.build.images));
};

function fonts() {
  return src(path.src.fonts, { base: srcPath + "fonts/"})
    .pipe(dest(path.build.fonts));
};

exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.webp = getWebp;
exports.fonts = fonts;


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
  return src('src/scss/style.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true,
    }))
    .pipe(cleanCss({
      
    }))
    // .pipe(sourcemaps.write('.sourcemaps'))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
}

function startWatch() {
  watch('src/**/*.html').on('change', browserSync.reload);
  watch('src/scss/**/*.scss', getCss);
}

exports.default = parallel(getCss, getBrowserSync, startWatch);