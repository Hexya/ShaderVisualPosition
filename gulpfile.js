'use strict'

const { registry, task, series, parallel } = require('gulp')
const HubRegistry = require('gulp-hub')

registry(new HubRegistry('tasks/*.js'))

// Watch
task('watch', series(['sass', 'webpack', parallel(['sass:watch', 'webpack:watch'])]))

task('build', series('sass', 'webpack'))
