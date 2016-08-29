'use strict';
const got = require('got');
var fetch = {};

fetch.edumate = function (endpoint, options, key) {
  return got(endpoint, options)
    .then(response => {
      if (response.body.length > 0) {
        this.$dispatch('freshness-update', response.body[0].freshness);
      }
      this.$set(key, response.body);
    })
    .catch(error => {
      console.error(error);
    });
};

module.exports = fetch;
