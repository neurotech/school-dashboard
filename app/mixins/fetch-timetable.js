'use strict';
const config = require('../config');
const fetch = require('../lib/fetch');

module.exports = {
  methods: {
    fetchTimetable: function () {
      this.get(config.get('api') + 'periods/current', config.get('got'), 'timetable');
    },
    get: fetch.edumate
  }
};
