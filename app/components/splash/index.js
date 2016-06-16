'use strict';

const path = require('path');
const pug = require('pug');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'splash.pug')),
  data: function () {
    return {
      title: 'Picnic',
      version: process.env.npm_package_version
    };
  }
};
