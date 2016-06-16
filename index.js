'use strict';

const electron = require('electron');
const app = electron.app;

require('electron-debug')();

let mainWindow;
let factor = 1.5;

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
});
