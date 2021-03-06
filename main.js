const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 450,
    height: 285,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile("./index.html")
  win.setIcon("./assets/logo.png");
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})
