const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

//mongose - database
mongoose.connect(
  'mongodb://localhost:27017/nodeapihunt',
  { useNewUrlParser: true }
);

requireDir('./src/models');

app.get('/', (req, res) => {
  res.send('Hello World teste');
});

app.listen(3001);
