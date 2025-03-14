import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';

const createWindow = () => {
    const mainWindow = new BrowserWindow({});


    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));

    mainWindow.setMenuBarVisibility(false);
};


app.whenReady().then(createWindow);
