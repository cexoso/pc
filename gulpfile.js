'use strict'
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    jsmin = require('gulp-jsmin'),
    es = require('event-stream'),
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename'),
    sass = require("gulp-sass"),
    path = require("path"),
    rimraf = require("gulp-rimraf"),
    chokidar = require('chokidar'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    es = require('event-stream'),
    gulpFilter = require('gulp-filter'),
    image = require('gulp-image'),
    sort = require('gulp-sort'),
    Q = require('q'),
    templateCache = require('gulp-angular-templatecache'),
    autoprefixer = require('gulp-autoprefixer'),
    minimist=require('minimist'),
    httpProxy = require('http-proxy');

    var proxy = httpProxy.createProxyServer({});
    proxy.on('error', function (err, req, res) {
        console.log(err);
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });
        res.end(err+"");
    });

gulp.task("server",['scss:watch'],function(){
  var browserSync=require("browser-sync");
  browserSync.init({
    server:{
      baseDir:["app","bower_components"],
      middleware: [function (req, res, next) {
        if(!req.url.match("/api/")){
          next();
        }else{
          // console.log("代理："+req.url)
          // next();
          req.url=req.url.replace("/pc/","/Patica2.0/");
          console.log(req.url)
          proxy.web(req, res, { target: 'http://www.patica.cn'});
        }
      }]
    },
    port:80
  });//browerSync.init end
  var html = 'app/pc/**/*.html';
  var css = 'app/pc/**/*.css';
  var js = 'app/pc/**/*.js';
  chokidar.watch([].concat(css, js))
      .on('add', injectDev)
      .on('unlink', injectDev);
  chokidar.watch([].concat(js,html))
      .on('all',browserSync.reload);
  chokidar.watch([].concat(css))
      .on('all', function (event, path) {
        console.log(path)
        gulp.src(path)
          .pipe(browserSync.stream());
      });
});//task server end

function clear() {
    return gulp.src('dist')
        .pipe(rimraf({
            force: true
        }));
};
function makeCache() {
    return gulp.src('app/pc/component/**/*.html')
        .pipe(sort())
        .pipe(templateCache({
            root: 'components'
        }))
        .pipe(jsmin())
        .pipe(rev())
        .pipe(gulp.dest('./dist/scripts'));
};
function distlib() {
    var filter = gulpFilter('*.js');
    console.log(bowerFiles());
    return gulp.src(bowerFiles())
        .pipe(filter)
        .pipe(concat('lib.js'), {
            newLine: ';'
        })
        .pipe(jsmin())
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./dist/scripts'));
};


gulp.task('makeCache', makeCache);
gulp.task('clear', clear);
gulp.task('default', ['server']);
/**
 * 开发模式自动注入
 */
var injectDev = (function () {
    var t = null;
    var timeout = 50;
    return function () {
        if (t) {
            clearTimeout(t);
        }
        t = setTimeout(function () {
            gulp.src('app/pc/indexTpl.html')
                .pipe(inject(gulp.src(bowerFiles(), {
                    read: false
                }), {
                    name: 'bower',
                    addRootSlash: true,
                    ignorePath: ['bower_components', 'app']
                }))
                .pipe(inject(gulp.src('app/pc/**/*.js', {
                    read: false
                }), {
                    name: 'inject',
                    addRootSlash: true,
                    ignorePath: ['bower_components', 'app']
                }))
                .pipe(inject(gulp.src('app/pc/**/*.css', {
                    read: false
                }), {
                    name: 'inject',
                    addRootSlash: true,
                    ignorePath: ['bower_components', 'app']
                }))
                .pipe(rename('index.html'))
                .pipe(gulp.dest('app/pc/'));
        }, timeout);
    }
})();
gulp.task('injectDev', injectDev);
/**
        自动编译scss文件
     */
var scssCompile = (function () {
    var arr = [];
    var t = null;
    var timeout = 50;
    return function (csspath) {
        if(csspath=="app\\css\\base.scss"){
            return;
        }
        if (t) {
            clearTimeout(t);
        }
        if (arr.indexOf(csspath) == -1) {
            arr.push(csspath);
        }
        t = setTimeout(function () {
            var st = new Date();
            gulp.src(arr, {
                    base: '.'
                })
                .pipe(sass()
                    .on('error', sass.logError))
                .pipe(autoprefixer({
                    browsers: ['last 2 versions']
                }))
                .pipe(rename(function (p) {
                    p.extname = ".css";
                }))
                .pipe(gulp.dest('./'));
            var et = new Date();
            console.log(et - st + 'ms for compile ' + arr.length + ' sass');
            arr.length = 0;
        }, timeout);
    }
})();
function scssRemove(csspath) {
    var csspath = path.dirname(csspath) + '\\' + path.basename(csspath, 'scss') + 'css';
    gulp.src(csspath)
        .pipe(rimraf({
            force: true
        }));
}
gulp.task('scss:watch', function () {
    chokidar.watch('app/pc/**/*.scss')
        .on('add', function (path) {
            scssCompile(path);
        })
        .on('change', function (path) {
            scssCompile(path);
        })
        .on('unlink', scssRemove);
});
gulp.task('test',function () {

    console.log(minimist(process.argv.slice(2)));
    return console.log(1);
})


process.on('uncaughtException', function (err) {
    console.log(err.stack);
});
