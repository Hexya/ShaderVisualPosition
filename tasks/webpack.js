'use strict'
const { src, watch, dest, task } = require('gulp')
const plumber = require('gulp-plumber')

const wpck = require('webpack')
const gulpWebpack = require('webpack-stream')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const webpack = () => {
  const isDev = process.env.NODE_ENV === 'development'
  const sourcemapsEnabled = isDev
  const optimize = {}
  if (!isDev) {
    optimize.minimize = [
      new UglifyJSPlugin({
        extractComments: false,
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  }
  const webpackOptions = {
    mode: isDev ? 'development' : 'production',
    entry: './src/scripts/main.js',
    output: {
      filename: `[name].js`
    },
    watch: isDev,
    watchOptions: {
      ignored: /node_modules/
    },
    devtool: sourcemapsEnabled && 'inline-source-map',
    resolve: {
      modules: [ 'node_modules', '/src/scripts' ],
      extensions: [ '.js', '.json', '.vert', '.frag', '.vert'],
      symlinks: false
    },
    module: {
      rules: [
        {
          test: /\.(glsl|frag|vert)$/,
          use: [
            {
              loader: 'raw-loader'
            },
            {
              loader: 'glslify-loader'
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [ 'env', 'es2015', 'stage-0' ],
              plugins: [ 'transform-object-rest-spread', 'transform-decorators-legacy', 'add-module-exports' ],
              cacheDirectory: true
            }
          }
        }
      ]
    },
    plugins: [
    ]
  }

  return src('./src/scripts/main.js')
      .pipe(plumber())
      .pipe(gulpWebpack(webpackOptions, wpck))
      .pipe(dest('dist/build'))
}
task('webpack', webpack)

task('webpack:watch', done => {
  const input = './src/scripts/**/*.js'

  watch(input, webpack)
})
