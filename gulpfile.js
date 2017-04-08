'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

// task for building .ts files into .js files
gulp.task('build', function() {
  var tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('./built'));
});

// task for copying all *.html files to views folder
var sourceHtmlFiles = ['src/**/*.html'];
var sourceStyleFiles = ['src/**/*.css'];
var assetsFiles = ['src/shared/assets/**/*'];
var dataFiles = ['src/shared/data/*.json'];
var destination = 'public/';
gulp.task('copyHtmls', function() {
  return gulp.src(sourceHtmlFiles).pipe(gulp.dest(destination));
});

gulp.task('copyStyles', function() {
  return gulp.src(sourceStyleFiles).pipe(gulp.dest(destination + "css/"));
});

gulp.task('copyAssets', function() {
  return gulp.src(assetsFiles).pipe(gulp.dest(destination + "assets/"));
});

gulp.task('copyData', function() {
  return gulp.src(dataFiles).pipe(gulp.dest(destination + "data/"));
});

// watch task for monitoring any .ts file changes
gulp.task('watch', ['build'], function() {
  gulp.watch(['./**/*.ts', './**/*.html', './**/*.css', './**/*.json'], ['build', 'copyHtmls', 'copyStyles', 'copyAssets', 'copyData']);
});