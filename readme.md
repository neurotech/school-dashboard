# app

> My superb app


## Dev

```
$ npm install
```

### Run

```
$ npm start
```

### Build

```
$ npm run build
```

Builds the app for OS X, Linux, and Windows, using [electron-packager](https://github.com/electron-userland/electron-packager).

# TODO

 - Light/dark mode
 - [countUp.js](https://inorganik.github.io/countUp.js/) as 'transition'
 - `time-of-day.js` should return `'dawn'` (5AM to 7AM)

```javascript
setTimeout(function () {
  TODO:
  1. add 'transition' class
  2. insertCSS accordingly (light/dark)
  3. remove 'transition' class
  i.e. webContents.insertCSS('body { font-size: 200%; }');
}, 10000);
```
