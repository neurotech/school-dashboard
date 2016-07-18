'use strict';

let CountUp = require('countup.js');

module.exports = {
  template: '<div id="counter" class="counterFade"></div>',
  props: {
    count: Number,
    duration: String
  },
  compiled: function () {
    var options = {
      useEasing: true,
      useGrouping: false,
      separator: '',
      decimal: '.',
      prefix: '',
      suffix: ''
    };
    var demo = new CountUp(this.$el, 1, this.count, 0, Number(this.duration), options);
    console.log(this.duration);
    setTimeout(function () {
      demo.start();
    }, 600);
  },
  activated: function () {
    demo.update(this.count);
  }
};
