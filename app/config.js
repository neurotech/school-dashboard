'use strict';

const Config = require('electron-config');

module.exports = new Config({
  defaults: {
    api: 'http://0.0.0.0:12345',
    got: {
      json: true,
      headers: {
        Authorization: false
      }
    },
    now: {
      date: 'dddd Do MMMM',
      time: 'h:mm A'
    },
    timeStamps: {
      format: 'h:mm A'
    },
    cycles: {
      everySecond: 1000,
      everyMinute: 60000
    },
    lastUpdated: {
      format: 'Do MMMM [at] h:mm A'
    }
  }
});