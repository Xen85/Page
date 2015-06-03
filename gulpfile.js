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


var paths = {
 scripts: ['js/*.js'],
 styles: ['css/*.css'],
 html: ['index.html'], 
  dist: ['build/']
};
 
gulp.task('build', function(){
 gulp.src(paths.scripts.concat(paths.html, paths.styles))
 .pipe(gulp.dest(paths.dist));
});

