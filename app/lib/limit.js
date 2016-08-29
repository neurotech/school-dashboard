'use strict';
var limit = {};

limit.set = function (total, startKey, endKey, type) {
  if (total > 0) {
    if (this.$get(endKey) >= (total - this.$get(startKey))) {
      this.$set(endKey, 0);
    } else {
      var step = this.$get(endKey);
      step += this.$get(startKey);
      this.$set(endKey, step);
    }
  }
};

module.exports = limit;
