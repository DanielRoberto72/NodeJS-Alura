const express = require('express');
const app = express();
const bodyParser = require('body-parser');


<<<<<<< HEAD:NodeJS - JWT/app.js
const { estrategiasAutentoicacao } = require('./src/usuarios')
=======
>>>>>>> b4c27d56e13907971e200715243a72b3746aa9eb:NodeJS e JWT/app.js

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
module.exports = app;
