'use strict';

const page = require('page');
var content = document.querySelector('#content');

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

// setTimeout(function () {
//   page('/staff-absent');
// }, 2000);

// --------
// TODO: Turn the below function into an exported `carousel.start();` method
// --------

var carousel = ['/staff-absent', '/summary', '/splash'];
var duration = 5000;

function runCarousel (items) {
  var i = 0;
  setInterval(function () {
    page(items[i]);
    i++;
    if (i >= carousel.length) { i = 0; }
  }, duration);
}

runCarousel(carousel);

// setInterval(function () {
//   page('/staff-absent');
// }, 3200);
//
// setInterval(function () {
//   page('/splash');
// }, 5000);
