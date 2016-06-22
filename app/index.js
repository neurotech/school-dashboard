'use strict';

const Vue = require('vue');
const got = require('got');
const moment = require('moment');
const config = require('./config');
const check = require('./check');
const carousel = require('./js/carousel');
const pageChange = require('./transitions/page-change');

var now = moment();

var routes = ['staff-absent'];
var duration = 3000;

Vue.component('splash', require('./components/splash'));
Vue.component('staff-absent', require('./components/staff-absent'));
Vue.component('summary', require('./components/summary'));
Vue.component('icon-settings', require('./components/icon-settings'));

if (check() === 'OK') {
  carousel.start(routes, duration);
}

var app = new Vue({
  el: '#app',
  data: {
    currentView: 'splash',
    missingConfig: check(),
    freshness: now,
    timetable: {
      week: '',
      period: ''
    },
    now: {
      date: moment().format(config.get('now.date')),
      time: moment().format(config.get('now.time'))
    }
  },
  created: function () {
    this.fetchTimetable();
  },
  ready: function () {
    setInterval(this.fetchTime, config.get('cycles.everySecond'));
    setInterval(this.fetchTimetable, config.get('cycles.everyMinute'));
  },
  activate: function (done) {
    pageChange(done);
  },
  methods: {
    fetchTime: function () {
      var now = moment().format(config.get('now.time'));
      this.now.time = now;
    },
    fetchTimetable: function () {
      got(config.get('api') + 'periods/current', config.get('got'))
        .then(response => { this.timetable = response.body[0]; })
        .catch(error => { console.log(error); });
    },
    lastUpdated: function (raw) {
      var nice = moment(raw).format(config.get('lastUpdated.format'));
      return nice;
    }
  },
  events: {
    'freshness-update': function (dateTime) {
      this.freshness = dateTime;
    }
  }
});
