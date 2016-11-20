const http = require("http");
const crypto = require("crypto");
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

function startServer() {
  console.log('starting server');
  var server = http.createServer(function (req, res) {
    var port = crypto.randomBytes(16).toString("hex");
    ipc.once(port, function (ev, status, head, body) {
      //console.log(status, head, body);
      res.writeHead(status, head);
      res.end(body);
    });
    window.webContents.send("request", req, port);
  });
  server.listen(8000);
  console.log("http://localhost:8000/");
  createWindow();
}

app.on('ready', startServer)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
    