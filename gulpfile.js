var gulp = require('gulp');
var uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const connect = require('gulp-connect');
var watch = require('gulp-watch');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const rev = require('gulp-rev');
const del = require('del');
var revCollector = require('gulp-rev-collector');
var runSequence = require('run-sequence');
var csso = require('gulp-csso');

gulp.task('default', ['minihtml','minijs','minicss','miniimg','watch','connect']);

gulp.task('minicss', function () {
    // 将你的默认的任务代码放在这
    gulp.src('app/static/css/*.css')
    .pipe(csso())
    .pipe(gulp.dest('dist'));
});
gulp.task('minihtml', function () {
    // 将你的默认的任务代码放在这
    gulp.src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});
gulp.task('minijs', function () {
    // 将你的默认的任务代码放在这
    gulp.src(['app/**/js/*.js']) //获取文件，同时过滤掉.min.js文件
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(connect())
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/static/js'));
});
// gulp.task('mini',['minicss','minihtml','minijs'],function () {
//     // 将你的默认的任务代码放在这
//     console.log('压缩完成');
// });
gulp.task('watch', function () {
    gulp.watch('app/*.html', ['minihtml'])
    gulp.watch('app/**/*.js', ['minijs'])
})
gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        port: 1111,
        livereload: true
    });
})

gulp.task('miniimg', () =>
    gulp.src('app/static/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('del', function () {
    del('dist','rev');
})

// 同步执行  中括号中为异步执行
gulp.task('build', function (callback) {
    runSequence('del',
        ['minicss', 'minijs'],
        'minihtml',
        callback);
});
gulp.task('devwatch', function () {
    gulp.watch('app/**/*.*', ['all','sass'])
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
    runSequence('del','all','connect','devwatch')
})