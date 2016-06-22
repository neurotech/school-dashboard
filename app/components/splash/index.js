'use strict';

const path = require('path');
const pug = require('pug');
const pageChange = require('../../transitions/page-change');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'splash.pug')),
  data: function () {
    return {
      title: 'Picnic',
      description: 'Passive Information Communicator for New and Interesting Content',
      version: process.env.npm_package_version
    };
  },
  activate: function (done) {
    pageChange(done);
  }
};
