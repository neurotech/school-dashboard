'use strict';

const path = require('path');
const pug = require('pug');
const config = require('../../config');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'splash.pug')),
  data: function () {
    return {
      title: '',
      version: process.env.npm_package_version,
      endpoint: config.api.endpoint
    };
  }
};
