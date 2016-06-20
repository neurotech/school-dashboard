'use strict';

const path = require('path');
const pug = require('pug');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'staff-absent.pug')),
  data: function () {
    return {
      title: 'Staff Away',
      staffAbsent: { now: [], soon: [], allDay: [] },
      limits: {
        defaults: { start: 6, end: 0, interval: 3750 },
        now: { start: 4, end: 0 },
        soon: { start: 4, end: 0 },
        allDay: { start: 6, end: 0 }
      }
    };
  },
  activate: function (done) {
    // Staff Away - Now
    this.fetchStaffAbsentNow();
    this.limitNow();

    // Staff Away - Soon
    this.fetchStaffAbsentSoon();
    this.limitSoon();

    // Staff Away - All Day
    this.fetchStaffAbsentAllDay();
    this.limitAllDay();

    done();
  },
  methods: {
    niceTime: require(path.join(__dirname, '../../js/nice-time')),
    paginate: require(path.join(__dirname, '../../js/paginate')),
    fetchStaffAbsentNow: require(path.join(__dirname, 'absent-now')).fetch,
    fetchStaffAbsentSoon: require(path.join(__dirname, 'absent-soon')).fetch,
    fetchStaffAbsentAllDay: require(path.join(__dirname, 'absent-allday')).fetch,
    limitNow: require(path.join(__dirname, 'absent-now')).limit,
    limitSoon: require(path.join(__dirname, 'absent-soon')).limit,
    limitAllDay: require(path.join(__dirname, 'absent-allday')).limit
  },
  transitions: {
    'fader': require(path.join(__dirname, '../../transitions/fader'))
  }
};
