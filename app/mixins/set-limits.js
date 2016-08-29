'use strict';
const limit = require('../lib/limit');

module.exports = {
  methods: {
    iterateLimits: function () {
      this.set(this.staffAway.now.length, 'limits.now.start', 'limits.now.end');
      this.set(this.staffAway.soon.length, 'limits.soon.start', 'limits.soon.end');
      this.set(this.staffAway.allDay.length, 'limits.allDay.start', 'limits.allDay.end');
    },
    set: limit.set
  }
};
