'use strict';

module.exports = function (done) {
  var content = document.getElementById('switcher');
  content.classList.add('transition');
  setTimeout(function () {
    content.classList.remove('transition');
    done();
  }, 500);
};
