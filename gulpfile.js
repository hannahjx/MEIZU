var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log(1+2);
});
gulp.task('minihtml',function(){
    console.log('我要压缩html');
})
gulp.task('minicss',function(){
    console.log('我要压缩css');
})
gulp.task('minijs',function(){
    console.log('我要压缩js');
})
gulp.task('mini',['minihtml','minicss','minijs'],function(){
    console.log('压缩成功');
})