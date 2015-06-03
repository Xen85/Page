var gulp = require('gulp'), connect = require('gulp-connect');
 
 var server;
	gulp.task('connect', function() {
	  server = connect.server({
	    root: './',
	    livereload: true,
	    port: 9987
	  });
 
});
 
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
});


 
gulp.task('build', function(){
 return gulp.src(['./index.html', './src/**/*'], {base: '.'}).pipe(gulp.dest('build'));
});

