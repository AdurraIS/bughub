import { app, BrowserWindow } from 'electron';
import path from 'path';

const createWindow = () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
};

app.on('ready', createWindow);
