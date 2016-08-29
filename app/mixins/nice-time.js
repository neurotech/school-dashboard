'use strict';

const moment = require('moment');
const config = require('../config');

module.exports = {
  methods: {
    niceTime: function (time) {
      var niceTime = moment(time).format(config.get('timeStamps.format'));
      return niceTime;
    }
  }
};
