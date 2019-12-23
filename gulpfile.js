var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
// var imageminMoz = require('imagemin-mozjpeg');
var webp = require('gulp-webp');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");

// SASS TASKS
gulp.task('sass', function(){
  return gulp.src('src/styles/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('src/styles/'))
});

gulp.task('watch',function() {
  gulp.watch('src/styles/*.scss', gulp.series('sass')); 
});

gulp.task('resize2000', function() {
  return  gulp.src('src/base_images/**/*.+(jpg|jpeg|webp)')
    .pipe(rename({
      suffix: "_2000w"
    }))
    .pipe(imageResize({
      width: 2000,
      upscale: false
    }))
    .pipe(gulp.dest('src/images'))
    .pipe(webp({
        quality: 70,
        preset: 'photo',
        method: 4
    }))
    .pipe(gulp.dest('src/images'))
})

gulp.task('resize1600', function() {
  return  gulp.src('src/base_images/**/*.+(jpg|jpeg|webp)')
    .pipe(imagemin({
      progressive: true,
    }))
    .pipe(rename({
      suffix: "_1600w"
    }))
    .pipe(imageResize({
      width: 1600,
      upscale: false
    }))
    .pipe(gulp.dest('src/images'))
    .pipe(webp({
        quality: 70,
        preset: 'photo',
        method: 4
    }))
    .pipe(gulp.dest('src/images'))
})

gulp.task('resize1200', function() {
  return  gulp.src('src/base_images/**/*.+(jpg|jpeg|webp)')
    .pipe(imagemin({
      progressive: true,
    }))
    .pipe(rename({
      suffix: "_1200w"
    }))
    .pipe(imageResize({
      width: 1200,
      upscale: false
    }))
    .pipe(gulp.dest('src/images'))
    .pipe(webp({
        quality: 70,
        preset: 'photo',
        method: 4
    }))
    .pipe(gulp.dest('src/images'))
})
gulp.task('resize1000', function() {
  return  gulp.src('src/base_images/**/*.+(jpg|jpeg|webp)')
    .pipe(imagemin({
      progressive: true,
    }))
    .pipe(rename({
      suffix: "_1000w"
    }))
    .pipe(imageResize({
      width: 1000,
      upscale: false
    }))
    .pipe(gulp.dest('src/images'))
    .pipe(webp({
      quality: 70,
      preset: 'photo',
      method: 4
    }))
    .pipe(gulp.dest('src/images'))
})
gulp.task('resize800', function() {
  return  gulp.src('src/base_images/**/*.+(jpg|jpeg|webp)')
    .pipe(imagemin({
      progressive: true,
    }))
    .pipe(rename({
      suffix: "_800w"
    }))
    .pipe(imageResize({
      width: 800,
      upscale: false
    }))
    .pipe(gulp.dest('src/images'))
    .pipe(webp({
      quality: 70,
      preset: 'photo',
      method: 4
    }))
    .pipe(gulp.dest('src/images'))
})
gulp.task('resize600', function() {
  return  gulp.src('src/base_images/**/*.+(jpg|jpeg|webp)')
    .pipe(imagemin({
      progressive: true,
    }))
    .pipe(rename({
      suffix: "_600w"
    }))
    .pipe(imageResize({
      width: 600,
      upscale: false
    }))
    .pipe(gulp.dest('src/images'))
    .pipe(webp({
      quality: 90,
      preset: 'photo',
      method: 4
    }))
    .pipe(gulp.dest('src/images'))
})
gulp.task('images',gulp.parallel('resize2000','resize1600','resize1200','resize1000','resize800','resize600'));