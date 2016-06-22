'use strict';

const timeOfDay = require('./app/js/time-of-day');
const electron = require('electron');
const app = electron.app;

const globalShortcut = electron.globalShortcut;

require('electron-debug');

let mainWindow;
let factor = 1.25;

function onClosed () {
  mainWindow = null;
}

function createMainWindow () {
  const win = new electron.BrowserWindow({
    backgroundColor: '#312e46',
    width: 1920 / factor,
    height: 1080 / factor,
    autoHideMenuBar: true
  });

  win.loadURL(`file://${__dirname}/app/index.html`);
  win.on('closed', onClosed);

  return win;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();

  if (timeOfDay() === 'morning' || timeOfDay() === 'afternoon') {
    // light.css
    console.log('Good morning or afternoon!?');
  } else {
    // dark.css
    console.log('GOOD EVENING!');
  }

  let webContents = mainWindow.webContents;
  globalShortcut.register('CommandOrControl+Alt+K', function () {
    webContents.toggleDevTools();
  });
});

app.on('will-quit', function () {
  globalShortcut.unregisterAll();
});
