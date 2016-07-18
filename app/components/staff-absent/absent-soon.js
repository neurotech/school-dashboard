'use strict';

const got = require('got');
const config = require('../../config');

var absentSoon = {};

absentSoon.fetch = function () {
  got(config.get('api') + 'staff/absent/soon', config.get('got'))
    .then(response => {
      this.staffAbsent.soon = response.body;
      if (response.body.length > this.limits.soon.start) {
        this.limits.soon.start = this.paginate(response.body.length);
      }
    })
    .catch(error => { console.log(error); });
};

absentSoon.limit = function () {
  var self = this;
  setInterval(function () {
    if (self.staffAbsent.soon.length > 0) {
      if (self.limits.soon.end >= (self.staffAbsent.soon.length - self.limits.soon.start)) {
        self.limits.soon.end = 0;
      } else {
        self.limits.soon.end += self.limits.soon.start;
      }
    }
  }, self.limits.defaults.interval);
};

absentSoon.pages = function () {
  var self = this;
  self.pages.soon.end = self.limits.soon.start;
  setInterval(function () {
    if (self.staffAbsent.soon.length > 0) {
      if ((self.limits.soon.start + self.limits.soon.end) < self.staffAbsent.soon.length) {
        self.pages.soon.start = self.limits.soon.end + 1;
        self.pages.soon.end = self.limits.soon.start + self.limits.soon.end;
      } else {
        self.pages.soon.start = self.limits.soon.end + 1;
        self.pages.soon.end = self.staffAbsent.soon.length;
      }
    }
  }, self.limits.defaults.interval);
};

module.exports = absentSoon;
