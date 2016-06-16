'use strict';

const Chart = require('chart.js');

Chart.defaults.global.animation.duration = 900;
Chart.defaults.global.animation.easing = 'easeOutCirc';

const options = {
  responsive: false,
  cutoutPercentage: -1
};

module.exports = {
  template: '<canvas id="pie-chart" width="300" height="300"></canvas>',
  props: {
    labels: Array,
    points: Array,
    bgColors: Array
  },
  compiled: function () {
    var pieChart = new Chart(this.$el, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.points,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            borderColor: ['#403E58', '#403E58', '#403E58'],
            borderWidth: 4
          }
        ]
      },
      options: options
    });
  }
};
