'use strict';

const got = require('got');
const config = require('../../config');

var absentNow = {};

absentNow.fetch = function () {
  got(config.get('api') + 'staff/absent/now', config.get('got'))
    .then(response => {
      this.staffAbsent.now = response.body;
      if (response.body.length > this.limits.now.start) {
        this.limits.now.start = this.paginate(response.body.length);
      }
    })
    .catch(error => { console.log(error); });
};

absentNow.limit = function () {
  var self = this;
  setInterval(function () {
    if (self.staffAbsent.now.length > self.limits.now.start) {
      if (self.limits.now.end >= (self.staffAbsent.now.length - 3)) {
        self.limits.now.end = 0;
      } else {
        self.limits.now.end += self.limits.now.start;
      }
    }
  }, self.limits.defaults.interval);
};

module.exports = absentNow;
