const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('./public'));

//what are you requireing from routes?

app.use((req, res) => {
  res.sendFile('index.html', {
    root: './public/',
  });
});

module.exports = app;