'use strict';

module.exports = function (done) {
  var content = document.getElementById('picnic-content');
  content.classList.add('transition');
  setTimeout(function () {
    content.classList.remove('transition');
    done();
  }, 500);
};
