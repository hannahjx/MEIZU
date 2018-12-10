const gulp = require('gulp');//基础库,全局gulp
const babel = require('gulp-babel');//转义
const concat= require('gulp-concat'); //文件合并
const watch= require ('gulp-watch') ; //监听文件
const minihtml = require('gulp-htmlmin');//压缩HTML文件
const uglify=require('gulp-uglify');//压缩js文件
const cleanCSS = require('gulp-clean-css');//压缩css文件
const imagemin = require('gulp-imagemin');//压缩图片
const connect = require('gulp-connect');//服务器
const rev = require('gulp-rev');//生成hash后缀
const del = require('del');//删除文件
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const clean = require('gulp-clean');//清除文件夹
const runSequence = require('run-sequence');//异步改同步执行

//压缩html
// gulp.task('minihtml',function(){
//     gulp.src('app/**/*.html')//找到文件
//     .pipe(concat('app/**/*.html'))//合并文件
//     .pipe(babel({
//         presets: ['@babel/env']//转义
//     }))
//     .pipe(rev())//生成hash后缀
//     .pipe(htmlmin({ collapseWhitespace: true }))//压缩
//     .pipe(gulp.dest('dist'))//输出
//     .pipe(connect.reload());//热更新
// })
//压缩css
// gulp.task('cleanCSS',function(){
//     gulp.src('app/static/css/*.css')
//     .pipe(concat('app/static/css/*.css'))//合并文件
//     .pipe(babel({
//         presets: ['@babel/env']
//     }))
//     .pipe(rev())
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('dist'))
//     .pipe(connect.reload());
// })
//压缩js
// gulp.task('minijs',function () {
//     gulp.src('app/static/js/*.js')
//     .pipe(concat('app/static/js/*.js')) 
//     .pipe(babel({
//         presets: ['@babel/env']
//     }))
//     .pipe(rev())
//     .pipe(uglify())
//     .pipe(gulp.dest('dist'))
//     .pipe(connect.reload());
//   })
//压缩图片
// gulp.task('imagemin',function () {
//     gulp.src('app/static/images/*.js')
//     .pipe(concat('app/static/images/*.js')) 
//     .pipe(babel({
//         presets: ['@babel/env']
//     }))
//     .pipe(rev())
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist'))
//     .pipe(connect.reload());
//   })
//清除文件
// gulp.task('del', function () {
//     del('dist','rev');
// })
//异步改同步执行
// gulp.task('build', function(callback) {
    //     runSequence('del',
    //         ['minicss', 'minijs'],
    //         'minihtml',
    //         callback);
    //   });
    gulp.task('del', function () {
        del('dist','rev');
    })
//监听文件
gulp.task('devwatch',function(){
    gulp.watch('app/**/*.*',['all','sass'])
})
//开启服务器
gulp.task('connect',function(){
    connect.server({
        root: 'dist',
        port: '7777',
        livereload: true
    });
})
gulp.task('all',function () {
    gulp.src('app/**/*.*')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})
gulp.task('sass', function () {
    gulp.src('app/static/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});
gulp.task('dev',function () {
    runSequence('del','all','sass','connect','devwatch')
})
  //开发环境使用
// gulp.task('dev', ['clean','all','watch','connect']);
//正式环境使用
// gulp.task('proud', ['clean','all','watch','connect']);