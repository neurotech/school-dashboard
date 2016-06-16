'use strict';

const path = require('path');
const got = require('got');
const pug = require('pug');
const $ = require('jquery');
const config = require('../../config');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'staff-absent.pug')),
  data: function () {
    return {
      limitStart: 5,
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
  activate: function (done) {
    this.staffAbsentNow();
    this.staffAbsentSoon();
    this.staffAbsentAllDay();

    setInterval(function () {
      if (this.staffAbsent.allDay.length > 0) {
        if (this.limitEnd >= (this.staffAbsent.allDay.length - this.limitStart)) {
          this.limitEnd = 0;
        } else {
          this.limitEnd += this.limitStart;
        }
      }
    }.bind(this), 3000);
    done();
  },
  // methods: {
  //   staffAbsentNow: function () {
  //     // got(config.get('api') + 'staff/absent/now', config.get('got'))
  //       .then(response => {
  //         if (response.body.length > 0) {
  //           this.staffAbsent.now = response.body;
  //           this.$dispatch('freshness-update', response.body[0].freshness);
  //         }
  //       })
  //       .catch(error => { console.log(error); });
  //   },
  //   staffAbsentSoon: function () {
  //     // got(config.get('api') + 'staff/absent/soon', config.get('got'))
  //     got('http://www.mocky.io/v2/57628343100000b9148b1441', { json: true })
  //       .then(response => {
  //         if (response.body.length > 0) {
  //           this.staffAbsent.soon = response.body;
  //           this.$dispatch('freshness-update', response.body[0].freshness);
  //         }
  //       })
  //       .catch(error => { console.log(error); });
  //   },
  //   staffAbsentAllDay: function () {
  //     got(config.get('api') + 'staff/absent/allday', config.get('got'))
  //       .then(response => {
  //         if (response.body.length > 0) {
  //           this.staffAbsent.allDay = response.body;
  //           this.$dispatch('freshness-update', response.body[0].freshness);
  //           // setInterval(function () {
  //           //   this.limitEnd = this.limitStart;
  //           // }.bind(this), 3000);
  //         }
  //       })
  //       .catch(error => { console.log(error); });
  //   },
  //   niceTime: require(path.join(__dirname, '../../js/nice-time'))
  // }
  methods: {
    staffAbsentNow: function () {
      got('http://www.mocky.io/v2/57628309100000d2148b143f', { json: true })
        .then(response => {
          this.staffAbsent.now.push(response.body);
        })
        .catch(error => { console.log(error); });
    },
    staffAbsentSoon: function () {
      got('http://www.mocky.io/v2/57628343100000b9148b1441', { json: true })
        .then(response => {
          this.staffAbsent.soon.push(response.body);
        })
        .catch(error => { console.log(error); });
    },
    staffAbsentAllDay: function () {
      got(config.get('api') + 'staff/absent/allday', config.get('got'))
        .then(response => {
          if (response.body.length > 0) {
            this.staffAbsent.allDay = response.body;
            this.$dispatch('freshness-update', response.body[0].freshness);
          }
        })
        .catch(error => { console.log(error); });
    },
    niceTime: require(path.join(__dirname, '../../js/nice-time'))
  },
  transitions: {
    'fader': {
      type: 'animation',
      css: false,
      enter: function (el) {
        $(el)
          .css('opacity', 0)
          .animate({ opacity: 1 }, 500);
      },
      enterCancelled: function (el) {
        $(el).stop();
      },
      leave: function (el) {
        $(el).animate({ opacity: 0 }, 500);
      },
      leaveCancelled: function (el) {
        $(el).stop();
      }
    }
  }
};
