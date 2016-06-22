'use strict';

var carousel = {};

carousel.start = function (items, duration) {
  if (items.length === 1) {
    setTimeout(function () {
      app.currentView = items[0];
    }, duration);
  } else {
    var i = 0;
    setInterval(function () {
      app.currentView = items[i];
      i++;
      if (i >= items.length) { i = 0; }
    }, duration);
  }
};

module.exports = carousel;
