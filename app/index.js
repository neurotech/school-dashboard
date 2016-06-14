'use strict';

const Vue = require('vue');
const got = require('got');
const moment = require('moment');
const config = require('./config');
const carousel = require('./js/carousel');

var now = moment();

Vue.component('splash', require('./components/splash'));
Vue.component('staff-absent', require('./components/staff-absent'));
Vue.component('summary', require('./components/summary'));

var app = new Vue({
  el: '#app',
  data: {
    currentView: 'splash',
    headerTitle: 'Picnic',
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
    fetchTimetable: function () {
      console.log(config.get('api'));
      console.log(config.get('got'));
      got(config.get('api') + 'periods/current', config.get('got'))
        .then(response => { this.timetable = response.body[0]; })
        .catch(error => { console.log(error); });
    },
    fetchTime: function () {
      var now = moment().format(config.get('now.time'));
      this.now.time = now;
    },
    lastUpdated: function (raw) {
      var nice = moment(raw).format(config.get('lastUpdated.format'));
      return nice;
    }
  },
  events: {
    'freshness-update': function (freshnessRaw) {
      this.freshness = freshnessRaw;
    },
    'header-title-update': function (title) {
      this.headerTitle = title;
    }
  }
});
