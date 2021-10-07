const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let homeWindow;

const offers = [
  {
    id: 1,
    title: "Club Bravo Caribe Playa",
    destination: "République Dominicaine - Juan Dolo",
    description: "Ceci est une description",
    pros: "Animation francophone Bravo Club",
    price: 1149,
    image:
      "https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Club Bravo Caribe Playa",
    destination: "République Dominicaine - Juan Dolo",
    description: "Ceci est une description",
    pros: "Animation francophone Bravo Club",
    price: 3559,
    image:
      "https://images.unsplash.com/photo-1512552288940-3a300922a275?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 3,
    title: "Sahara Casino Las Vegas",
    destination: "USA - California",
    description: "Ceci est une description",
    pros: "Animation francophone Bravo Club",
    price: 2549,
    image:
      "https://media.istockphoto.com/photos/lake-las-vegas-picture-id1285873804?b=1&k=20&m=1285873804&s=170667a&w=0&h=j0YMFJP5y18TMnNmVwB-5T0y8zxz2dhRYdbD_ttfmiU=",
  },
  {
    id: 4,
    title: "Club Bravo Caribe Playa",
    destination: "République Dominicaine - Juan Dolo",
    description: "Ceci est une description",
    pros: "Animation francophone Bravo Club",
    price: 3559,
    image:
      "https://images.unsplash.com/photo-1629649439562-4c682cd0c0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMjc2NjcxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    title: "Club Bravo Caribe Playa",
    destination: "République Dominicaine - Juan Dolo",
    description: "Ceci est une description",
    pros: "Animation francophone Bravo Club",
    price: 3559,
    image:
      "https://images.unsplash.com/photo-1585592377048-a627ec452b7e?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTB8MTI3NjY3MXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

function createWindow(viewName, dataToSend, width = 1500, height = 1200) {
  const win = new BrowserWindow({
    width,
    height,
    resizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the home.html with some content (data sended to the brand new fresh view)
  win
    .loadFile(path.join(__dirname, "views", viewName, viewName + ".html"))
    .then(() => {
      win.send("init-data", offers);
    });

  // For debugging
  //win.webContents.openDevTools();
  return win;
}

app.whenReady().then(() => {
  homeWindow = createWindow("home", offers);
});

// For Mac
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    homeWindow = createWindow("home", offers);
  }
});
