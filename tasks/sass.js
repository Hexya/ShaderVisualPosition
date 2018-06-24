'use strict'
const { src, watch, dest, task } = require('gulp')
const gulpif = require('gulp-if')
const gsass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

const sass = () => {
  const input = './src/stylesheets/main.scss'
  const output = './dist/build'

  const isProd = process.env.NODE_ENV === 'production'

  return src(input)
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(gsass({ outputStyle: isProd ? 'compressed' : 'expanded' }))
    .on(
      'error',
      function (e) {
        console.log('gulp error', e)
        this.emit('end')
      })
      .pipe(gulpif(!isProd, sourcemaps.write()))
    .pipe(autoprefixer({ browsers: [ 'last 2 versions' ], cascade: false }))
    .pipe(dest(output))
}

task('sass', sass)

task('sass:watch', done => {
  const input = './src/stylesheets/**/*.scss'

  watch(input, sass)
})
