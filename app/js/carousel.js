'use strict';

const page = require('page');
var content = document.querySelector('#content');
var carousel = {};

page.base('/picnic');
page('*', function (ctx, next) {
  if (ctx.init) {
    next();
  } else {
    content.classList.add('transition');
    setTimeout(function () {
      content.classList.remove('transition');
      next();
    }, 225);
  }
});

page('/splash', splash);
page('/staff-absent', staffAbsent);
page('/summary', summary);
page();

function splash () {
  app.currentView = 'splash';
}

function staffAbsent () {
  app.currentView = 'staff-absent';
}

function summary () {
  app.currentView = 'summary';
}

carousel.start = function (items, duration) {
  if (items.length === 1) {
    setTimeout(function () {
      page(items[0]);
    }, duration);
  } else {
    var i = 0;
    setInterval(function () {
      page(items[i]);
      i++;
      if (i >= items.length) { i = 0; }
    }, duration);
  }
};

module.exports = carousel;
