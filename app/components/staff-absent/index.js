'use strict';

const path = require('path');
const got = require('got');
const pug = require('pug');
const config = require('../../config');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'staff-absent.pug')),
  data: function () {
    return {
      limitStart: 4,
      limitEnd: 0,
      title: 'Staff Away',
      staffAbsent: {
        now: [],
        soon: [],
        allDay: []
      }
    };
  },
  created: function () {
    this.staffAbsentNow();
    this.staffAbsentSoon();
    this.staffAbsentAllDay();
  },
  methods: {
    staffAbsentNow: function () {
      got(config.api.endpoint + 'staff/absent/now', config.got)
        .then(response => {
          if (response.body.length > 0) {
            this.staffAbsent.now = response.body;
            this.$dispatch('freshness-update', response.body[0].freshness);
          }
        })
        .catch(error => { console.log(error); });
    },
    staffAbsentSoon: function () {
      got(config.api.endpoint + 'staff/absent/soon', config.got)
        .then(response => {
          if (response.body.length > 0) {
            this.staffAbsent.soon = response.body;
            this.$dispatch('freshness-update', response.body[0].freshness);
          }
        })
        .catch(error => { console.log(error); });
    },
    staffAbsentAllDay: function () {
      got(config.api.endpoint + 'staff/absent/allday', config.got)
        .then(response => {
          if (response.body.length > 0) {
            this.staffAbsent.allDay = response.body;
            this.$dispatch('freshness-update', response.body[0].freshness);
            // setInterval(function () {
            //   this.limitEnd = this.limitStart;
            // }.bind(this), 3000);
          }
        })
        .catch(error => { console.log(error); });
    },
    niceTime: require(path.join(__dirname, '../../js/nice-time'))
  }
};
