'use strict';

var config = {};

config.secret = {
  authKey: process.env.EDUMATE_API_TOKEN
};

config.api = {
  endpoint: process.env.EDUMATE_HTTP_HOST,
  authHeader: { 'Authorization': config.secret.authKey }
};

config.got = {
  json: true,
  headers: config.api.authHeader
};

config.now = {
  date: 'dddd Do MMMM',
  time: 'h:mm A'
};

config.timeStamps = {
  format: 'h:mm A'
};

config.cycles = {
  everySecond: 1000,
  everyminute: 60000
};

config.lastUpdated = {
  format: 'Do MMMM [at] h:mm A'
};

module.exports = config;
