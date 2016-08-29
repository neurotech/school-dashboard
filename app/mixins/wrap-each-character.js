'use strict';

module.exports = {
  methods: {
    wrapEachChar: function (text, cssClass, step) {
      var chunked = text.split('');
      var delay = 0 - step;
      var wrapped = chunked.map(function (chunk) {
        var html = `<span class="${cssClass}" style="animation-delay: ${delay += step}ms">${chunk.replace(' ', '&ensp;')}</span>`;
        return html;
      });
      return wrapped.join('');
    }
  }
};
