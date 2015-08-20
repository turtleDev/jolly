'use strict';

var Confidence = require('confidence');
var Config = require('./config');

var criteria = {
  env: process.env.NODE_ENV
};

var manifest = {
  $meta: 'jolly app manifest document.',
  server: {
    debug: {
      request: ['error']
    },
    connections: {
      routes: {
        security: true
      }
    }
  },
  connections: [{
    port: Config.get('/port/web'),
    labels: ['web']
  }]
};


var store = new Confidence.Store(manifest);


exports.get = function(key) {
  return store.get(key, criteria);
};
exports.meta = function(key) {
  return store.meta(key, criteria);
};