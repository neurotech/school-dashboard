'use strict';

const Vue = require('vue');
const path = require('path');
const moment = require('moment');
const config = require('./config');
const check = require('./check');
const carousel = require('./lib/carousel');

var routes = [
  {
    view: 'staff-absent',
    duration: 7500
  }
];

Vue.config.devtools = false;
Vue.component('splash', require('./components/splash'));
Vue.component('staff-absent', require('./components/staff-absent'));

var app = new Vue({
  el: '#app',
  data: {
    currentView: 'splash',
    missingConfig: check(),
    freshness: '',
    timetable: [{
      week: '',
      period: ''
    }],
    now: {
      date: moment().format(config.get('now.date')),
      time: moment().format(config.get('now.time'))
    }
  },
  mixins: [require(path.join(__dirname, './mixins/fetch-timetable'))],
  created: function () {
    this.fetchTimetable();
  },
  ready: function () {
    setInterval(this.fetchTime, config.get('cycles.everySecond'));
    setInterval(this.fetchTimetable, config.get('cycles.everyMinute'));
    setInterval(this.fetchDate, config.get('cycles.everyHour'));
  },
  methods: {
    fetchTime: function () {
      var currentTime = moment().format(config.get('now.time'));
      this.now.time = currentTime;
    },
    fetchDate: function () {
      var currentDate = moment().format(config.get('now.date'));
      this.now.date = currentDate;
    },
    lastUpdated: function (raw) {
      var nice = moment(raw).format(config.get('lastUpdated.format'));
      return nice;
    },
    flashSeparator: function (time) {
      var separated = time.replace(':', '<span class="flash-separator">&#58;</span>');
      return separated;
    }
  },
  transitions: {
    'fader': require('./transitions/fader')
  },
  events: {
    'freshness-update': function (dateTime) {
      this.freshness = dateTime;
    }
  }
});

window.app = app;

if (check() === 'OK') { carousel.start(routes, 1000); }
