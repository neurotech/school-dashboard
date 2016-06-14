'use strict';

const path = require('path');
const pug = require('pug');

module.exports = {
  template: pug.renderFile(path.join(__dirname, 'summary.pug')),
  data: function () {
    return {
      barChartData: [12, 19, 3]
    };
  },
  components: {
    'bar-chart': require('../bar-chart'),
    'pie-chart': require('../pie-chart')
  }
};
