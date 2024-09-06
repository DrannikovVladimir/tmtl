const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
// const cssbeautify = require('gulp-cssbeautify');
const cssnano = require('gulp-cssnano');
// const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const del = require('del');
const babel = require('gulp-babel');
const sitemap = require('gulp-sitemap');

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
    .pipe(cssnano({
      zindex: false,
      discardComments: {
        removeAll: true
      }
    }))
    .pipe(sourcemaps.write(''))
    .pipe(dest("dist/css/"));
};

function js() {
  return src('src/js/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest("dist/js"));
};

function jsx() {
  return src('src/js/components/**/*.js')
  .pipe(plumber())
  .pipe(babel({
    presets: ['@babel/env', '@babel/preset-react']
  }))
  .pipe(uglify())
  .pipe(dest("dist/assets/components"));
}

function getWebp() {
  return src('src/img/**/*.{png,jpg}')
    .pipe(webp({
      quality: 85
    }))
    .pipe(dest('dist/img/'))
};

function getWebpSrc() {
  return src('src/img/**/*.{png,jpg}')
    .pipe(webp({
      quality: 85
    }))
    .pipe(dest('src/img/'))
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
  return src(path.src.fonts, { base: srcPath + "fonts/" })
    .pipe(dest(path.build.fonts));
};

async function clean() {
  return await del(path.clean);
};

function getSitemap() {
  return src('dist/**/*.html', {
    read: false
  })
  .pipe(sitemap({
    siteUrl: 'https://tmtl.kz',
    priority: function(siteUrl, loc, entry) {
      return loc.split('/').length === 0 ? 1 : 0.8;
    }
  }))
  .pipe(dest('dist/css'))
}

const build = series(clean, images, getWebp, parallel(html, css, js, jsx, fonts), getSitemap);

exports.html = html;
exports.getSitemap = getSitemap;
exports.css = css;
exports.js = js;
exports.jsx = jsx;
exports.images = images;
exports.webp = getWebp;
exports.getWebpSrc = getWebpSrc;
exports.fonts = fonts;
exports.clean = clean;
exports.build = build;


// Development

function getBrowserSync() {
  browserSync.init({
    proxy: "localhost:3000", // Адрес вашего Express-сервера
    port: 3001, // Порт для Browsersync
    notify: false,
    files: ['src/**/*.html', 'src/css/**/*.css', 'src/js/**/*.js'] // Файлы для отслеживания
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
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
}

function getJs() {
  return src('src/js/*.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(browserSync.stream());
}

function getJsx() {
  return src('src/js/components/**/*.js')
  .pipe(plumber())
  .pipe(babel({
    presets: ['@babel/env', '@babel/preset-react']
  }))
  .pipe(uglify())
  .pipe(dest("src/assets/components"))
  .pipe(browserSync.stream());
}

function startWatch() {
  watch('src/**/*.html').on('change', browserSync.reload);
  watch('src/scss/**/*.scss', series(getCss, browserSync.reload));
  watch('src/js/**/*.js', series(getJs, browserSync.reload));
  watch('src/js/components/**/*.js', series(getJsx, browserSync.reload));
}

exports.dev = parallel(getCss, getJs, getJsx, getBrowserSync, startWatch);