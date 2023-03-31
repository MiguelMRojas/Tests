const express = require('express');
const { create } = require('express-handlebars');
const path = require('path');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

// Middlewares
app.use(express.urlencoded({extended: false}));

// Global Variables

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

