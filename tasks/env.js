'use strict'
const { task } = require('gulp')

task('set-dev-node-env', function () {
  process.env.NODE_ENV = 'development'
  return process.env.NODE_ENV
})

task('set-prod-node-env', function () {
  process.env.NODE_ENV = 'production'
  return process.env.NODE_ENV
})
