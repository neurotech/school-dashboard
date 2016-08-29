'use strict';

module.exports = {
  methods: {
    progressBarWidth: function (total, end, start) {
      var percent = Math.round((end + start) / total * 100);
      if (percent > 100) {
        return 100;
      } else {
        return percent;
      }
    }
  }
};
