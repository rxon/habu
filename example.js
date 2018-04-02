const express = require('express');
const habu = require('./index');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000);
habu(3000);
