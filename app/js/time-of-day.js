'use strict';

let today = new Date();
let currentHour = today.getHours();

module.exports = function () {
  if (currentHour < 12) {
    return 'morning';
  } else if (currentHour < 18) {
    return 'afternoon';
  } else {
    return 'evening';
  }
};

// Thanks to Chinmayee G (http://stackoverflow.com/a/13245058)
