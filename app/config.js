'use strict';

const Config = require('electron-config');

module.exports = new Config({
  defaults: {
    api: false,
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
      everyMinute: 1000 * 60,
      everyHour: 60000 * 60
    },
    lastUpdated: {
      format: 'Do MMMM [at] h:mm A'
    },
    pagination: {
      threshold: {
        now: 3,
        soon: 3,
        allDay: 6
      }
    }
  }
});
