'use strict';

module.exports = function (done) {
  var content = document.querySelector('#content');
  content.classList.add('transition');
  setTimeout(function () {
    content.classList.remove('transition');
    done();
  }, 500);
};
