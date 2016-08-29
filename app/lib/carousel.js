'use strict';

var carousel = {};

var cycle = function (items, index) {
  if (items.length === 1) {
    setTimeout(function () {
      app.currentView = items[0].view;
    }, items[0].duration);
  } else {
    console.log('Set currentView to: ' + items[index].view);
    app.currentView = items[index].view;
    setTimeout(cycle.bind(null, items, (index + 1) % items.length), items[index].duration);
  }
};

carousel.start = function (items, delay) {
  setTimeout(function () {
    cycle(items, 0);
  }, delay);
};

module.exports = carousel;
