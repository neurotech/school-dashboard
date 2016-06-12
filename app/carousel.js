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
    }, 300);
  }
});

page('/staff-absent', staffAbsent);
page();

function staffAbsent () {
  app.currentView = 'staff-absent';
}

setTimeout(function () {
  page('/staff-absent');
}, 1500);
