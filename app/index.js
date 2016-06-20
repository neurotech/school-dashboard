'use strict';

const Vue = require('vue');
const got = require('got');
const moment = require('moment');
const config = require('./config');
const check = require('./check');
const carousel = require('./js/carousel');

var now = moment();
// var routes = ['/staff-absent', '/summary', '/splash'];
var routes = ['/staff-absent', '/splash'];
var duration = 10000;

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
    headerTitle: 'Picnic',
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
  compiled: function () {
    setInterval(this.fetchTime, config.get('cycles.everySecond'));
    setInterval(this.fetchTimetable, config.get('cycles.everyMinute'));
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
    'freshness-update': function (freshnessRaw) {
      this.freshness = freshnessRaw;
    }
  }
});
