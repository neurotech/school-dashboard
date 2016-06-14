'use strict';

const moment = require('moment');
const config = require('../config');

module.exports = function (time) {
  var niceTime = moment(time).format(config.timeStamps.format);
  return niceTime;
};
