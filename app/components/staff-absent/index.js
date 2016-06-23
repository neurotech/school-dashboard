'use strict';

const path = require('path');
const pug = require('pug');
const pageChange = require('../../transitions/page-change');

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
      },
      pages: {
        now: { start: 4, end: 0 },
        soon: { start: 4, end: 0 },
        allDay: { start: 6, end: 0 }
      }
    };
  },
  activate: function (done) {
    pageChange(done);

    // Staff Away - Now
    this.fetchStaffAbsentNow();
    this.limitNow();
    this.pagesNow();

    // Staff Away - Soon
    this.fetchStaffAbsentSoon();
    this.limitSoon();
    this.pagesSoon();

    // Staff Away - All Day
    this.fetchStaffAbsentAllDay();
    this.limitAllDay();
    this.pagesAllDay();
  },
  methods: {
    niceTime: require(path.join(__dirname, '../../js/nice-time')),
    paginate: require(path.join(__dirname, '../../js/paginate')),
    fetchStaffAbsentNow: require(path.join(__dirname, 'absent-now')).fetch,
    fetchStaffAbsentSoon: require(path.join(__dirname, 'absent-soon')).fetch,
    fetchStaffAbsentAllDay: require(path.join(__dirname, 'absent-allday')).fetch,
    limitNow: require(path.join(__dirname, 'absent-now')).limit,
    limitSoon: require(path.join(__dirname, 'absent-soon')).limit,
    limitAllDay: require(path.join(__dirname, 'absent-allday')).limit,
    pagesNow: require(path.join(__dirname, 'absent-now')).pages,
    pagesSoon: require(path.join(__dirname, 'absent-soon')).pages,
    pagesAllDay: require(path.join(__dirname, 'absent-allday')).pages
  },
  transitions: {
    'fader': require(path.join(__dirname, '../../transitions/fader'))
  }
};
