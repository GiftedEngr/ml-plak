'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BACKEND_BASE_URL: '"http://localhost:8000/"',
  CNC_BASE_URL: '"http://localhost:8081/"',
})
