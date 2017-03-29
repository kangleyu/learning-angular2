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
var sourceFiels = ['src/**/*.html'];
var destination = 'views/';
gulp.task('copy', function() {
  return gulp.src(sourceFiels).pipe(gulp.dest(destination));
})

// watch task for monitoring any .ts file changes
gulp.task('watch', ['build'], function() {
  gulp.watch('./**/*.ts', ['build']);
});