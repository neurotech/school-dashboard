'use strict';

const got = require('got');
const config = require('../../config');

var absentAllDay = {};

absentAllDay.fetch = function () {
  got(config.get('api') + 'staff/absent/allday', config.get('got'))
    .then(response => {
      if (response.body.length > this.limits.allDay.start) {
        this.limits.allDay.start = this.paginate(response.body.length);
        this.staffAbsent.allDay = response.body;
        this.$dispatch('freshness-update', response.body[0].freshness);
      }
    })
    .catch(error => { console.log(error); });
};

absentAllDay.limit = function () {
  var self = this;
  setInterval(function () {
    if (self.staffAbsent.allDay.length > 0) {
      if (self.limits.allDay.end >= (self.staffAbsent.allDay.length - self.limits.allDay.start)) {
        self.limits.allDay.end = 0;
      } else {
        self.limits.allDay.end += self.limits.allDay.start;
      }
    }
  }, self.limits.defaults.interval);
};

module.exports = absentAllDay;
