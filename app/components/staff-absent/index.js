'use strict';
const path = require('path');
const pug = require('pug');
const config = require('../../config');
const pageChange = require('../../lib/page-change');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'staff-absent.pug')),
  data: function () {
    return {
      title: 'Staff Away',
      iterateLimitInterval: null,
      staffAway: {
        now: [],
        soon: [],
        allDay: []
      },
      limits: {
        now: { start: config.get('pagination.threshold.now'), end: 0 },
        soon: { start: config.get('pagination.threshold.soon'), end: 0 },
        allDay: { start: config.get('pagination.threshold.allDay'), end: 0 }
      }
    };
  },
  mixins: [
    require(path.join(__dirname, '../../mixins/fetch-staff-away')),
    require(path.join(__dirname, '../../mixins/set-limits')),
    require(path.join(__dirname, '../../mixins/nice-time')),
    require(path.join(__dirname, '../../mixins/progress-bar'))
  ],
  activate: function (done) {
    pageChange(done);
    this.iterateLimitInterval = setInterval(this.iterateLimits, 3500);
  },
  created: function () {
    this.fetchAllData();
  },
  beforeDestroy: function () {
    clearInterval(this.iterateLimitInterval);
  },
  methods: {},
  transitions: {
    'fader': require(path.join(__dirname, '../../transitions/fader'))
  }
};
