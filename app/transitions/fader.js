'use strict';
const Velocity = require('velocity-animate');

module.exports = {
  type: 'animation',
  css: false,
  enter: function (el) {
    el.style.opacity = 0;
    Velocity(el, { opacity: 1 }, 1000);
  },
  leave: function (el) {
    Velocity(el, { opacity: 0 }, 1000);
  }
};
