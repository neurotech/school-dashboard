'use strict';

module.exports = function (items) {
  var chunks = Math.cbrt(items);
  return Math.round(items / chunks);
};
