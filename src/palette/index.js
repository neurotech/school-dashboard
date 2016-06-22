'use strict';
const path = require('path');
const fs = require('fs');
const base = require('./base');
const light = require('./light');
const dark = require('./dark');

let sass = path.join(__dirname, '../scss/palette.scss');

fs.truncateSync(sass, 0);

for (var i = 0; i < base.length; i++) {
  fs.appendFileSync(sass, `${base[i].name}: ${base[i].hex};\n`);
}

if (i === base.length) {
  console.log(`${base.length} rows written to ${sass}`);
}
