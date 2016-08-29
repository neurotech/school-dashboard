'use strict';

const path = require('path');
const pug = require('pug');
const pageChange = require('../../lib/page-change');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'splash.pug')),
  data: function () {
    return {
      title: 'Picnic',
      description: 'Passive Information Communicator for New and Interesting Content',
      version: process.env.npm_package_version
    };
  },
  mixins: [require(path.join(__dirname, '../../mixins/wrap-each-character'))],
  activate: function (done) {
    pageChange(done);
  }
};
