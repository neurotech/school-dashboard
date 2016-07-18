'use strict';

const path = require('path');
const pug = require('pug');
const pageChange = require('../../transitions/page-change');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'summary.pug')),
  data: function () {
    return {
      stat: 19
    };
  },
  activate: function (done) {
    pageChange(done);
  },
  components: {
    'counter': require('../counter')
  }
};
