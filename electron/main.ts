import { app, BrowserWindow, ipcMain, session } from 'electron'
import path from 'path'

process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, '../public')

let win: BrowserWindow | null

const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
const isDev = !app.isPackaged

function createWindow() {
  win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    icon: path.join(process.env.VITE_PUBLIC || path.join(__dirname, '../public'), 'captain-icon.png'),
    backgroundColor: '#0f172a',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0f172a',
      symbolColor: '#ffffff',
      height: 40
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      // Activer la persistance des données
      partition: 'persist:captaine',
    },
  })

  // Disable default menu
  win.setMenu(null)

  if (isDev) {
    // En mode dev, charger depuis le serveur Vite
    const url = VITE_DEV_SERVER_URL || 'http://localhost:5174'
    console.log('[Electron] Loading from dev server:', url)
    win.loadURL(url)
    win.webContents.openDevTools()
  } else {
    // En mode production, charger depuis le fichier build
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }

  win.on('closed', () => {
    win = null
  })
}

app.whenReady().then(() => {
  // Autoriser les permissions média (microphone) automatiquement
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    const allowedPermissions = ['media', 'mediaKeySystem', 'audioCapture']
    if (allowedPermissions.includes(permission)) {
      console.log(`[Electron] Permission '${permission}' accordée`)
      callback(true)
    } else {
      console.log(`[Electron] Permission '${permission}' refusée`)
      callback(false)
    }
  })

  // Autoriser aussi les vérifications de permission
  session.defaultSession.setPermissionCheckHandler((webContents, permission) => {
    const allowedPermissions = ['media', 'mediaKeySystem', 'audioCapture']
    return allowedPermissions.includes(permission)
  })

  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// IPC handlers
ipcMain.handle('get-app-version', () => {
  return app.getVersion()
})

ipcMain.handle('minimize-window', () => {
  win?.minimize()
})

ipcMain.handle('maximize-window', () => {
  if (win?.isMaximized()) {
    win.unmaximize()
  } else {
    win?.maximize()
  }
})

ipcMain.handle('close-window', () => {
  win?.close()
})
