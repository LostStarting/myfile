
var gulp = require('gulp');
var sass= require('gulp-sass');//sass命令
//gulp.task('命令名',回调函数);


gulp.task('copy-html',function(){
	gulp.src('Html/*.html')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\mymapping\\html'));
});

gulp.task('copy-img',function(){
	gulp.src('Img/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\mymapping\\Img'));
})

gulp.task('copy-css',function(){
	gulp.src('Scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\mymapping\\css'));
})

gulp.task('copy-scss',function(){
	gulp.src('Scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'));
})

gulp.task('copy-js',function(){
	gulp.src('js/*.js').pipe(gulp.dest('D:\\phpStudy\\WWW\\mymapping\\js'));
})

gulp.task('watch',function(){
	gulp.watch('Html/*.html',['copy-html']);
	gulp.watch('Img/**/*',['copy-img']);
	gulp.watch('js/*.js',['copy-js']);
	gulp.watch('Scss/*.scss',['copy-css']);
	gulp.watch('Scss/*.scss',['copy-scss']);
})
