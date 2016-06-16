'use strict';

const Chart = require('chart.js');

Chart.defaults.global.animation.duration = 900;
Chart.defaults.global.animation.easing = 'easeOutCirc';

const options = {
  responsive: false
};

module.exports = {
  template: '<canvas id="bar-chart" width="600" height="300"></canvas>',
  props: {
    label: String,
    labels: Array,
    points: Array,
    bgColors: Array,
    borderColors: Array
  },
  compiled: function () {
    var barChart = new Chart(this.$el, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.label,
          data: this.points,
          backgroundColor: this.bgColors,
          borderColor: this.borderColors,
          borderWidth: 1
        }]
      },
      options: options
    });
  }
};
