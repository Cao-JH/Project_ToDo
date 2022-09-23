// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
// 引入环境
const NODE_ENV = process.env.NODE_ENV

// 主窗口函数
function createWindow() {
    // 创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width: 1440,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.ts'),
            // Use pluginOptions.nodeIntegration, leave this alone
            // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
            // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
            // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
            nodeIntegration: true,
            // 关闭上下文隔离
            contextIsolation: false
        },
        frame: false,   // 去掉顶部导航  去掉关闭按钮  最大化最小化按钮
    })

    // 关于缩小，放大，关闭等操作
    ipcMain.on('min', () => mainWindow.minimize());
    ipcMain.on('max', () => mainWindow.maximize());
    ipcMain.on('close', () => mainWindow.close());

    const winURL = NODE_ENV === 'development'
        ? 'http://localhost:5173'
        : `file://${path.join(__dirname, '../dist/index.html')}`

    // 加载 index.html
    // mainWindow.loadFile('dist/index.html') // 此处跟electron官网路径不同，需要注意
    mainWindow.loadURL(winURL);


    // 打开开发工具
    if (NODE_ENV === "development") {
        mainWindow.webContents.openDevTools()
    }

    // 新窗口函数
    let newWin
    function openNewWin() {
        newWin = new BrowserWindow({
            width: 800,
            height: 800,
            // parent: mainWindow, // 主窗口
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            },
            // frame: false,   // 去掉顶部导航  去掉关闭按钮  最大化最小化按钮
        })
        // loadURL优点坑,还是选择使用path.join方法拼接请求地址
        newWin.loadURL(path.join(winURL, 'detail'))
        newWin.on('closed', () => { newWin = null })
    }
    ipcMain.on('openNewWin', () => openNewWin())
}


// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
        // 打开的窗口，那么程序会重新创建一个窗口。
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// 在这个文件中，你可以包含应用程序剩余的所有部分的代码，
// 也可以拆分成几个文件，然后用 require 导入。