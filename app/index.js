'use strict';

const Vue = require('vue');
const got = require('got');
const moment = require('moment');
const config = require('./config');
const carousel = require('./carousel');

var now = moment();

Vue.component('splash', require('./components/splash'));
Vue.component('staff-absent', require('./components/staff-absent'));

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
      date: moment().format(config.now.date),
      time: moment().format(config.now.time)
    }
  },
  created: function () {
    this.fetchTimetable();
  },
  compiled: function () {
    setInterval(this.fetchTime, config.cycles.everySecond);
    setInterval(this.fetchTimetable, config.cycles.everyminute);
  },
  methods: {
    fetchTimetable: function () {
      got(config.api.endpoint + 'periods/current', config.got)
        .then(response => { this.timetable = response.body[0]; })
        .catch(error => { console.log(error.response.body); });
    },
    fetchTime: function () {
      var now = moment().format(config.now.time);
      this.now.time = now;
    },
    lastUpdated: function (raw) {
      var nice = moment(raw).format(config.lastUpdated.format);
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
