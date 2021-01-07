const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const minify = require('gulp-minify');
 
gulp.task('compress', function() {
  return gulp.src(['src/js/*.js', 'src/*.mjs'])
    .pipe(minify({
      ext:{
        min:'.min.js'
      },
      noSource: true,
      ignoreFiles: ['.min.js']
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('sass', function () {
  return gulp.src('src/sass/**/base.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('sass', ()=>{
  gulp.watch(['src/sass/**/*.scss', 'src/sass/*.scss'], gulp.series('sass'));
}));