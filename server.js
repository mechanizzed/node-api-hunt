const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

//mongose - database
mongoose.connect(
  'mongodb://localhost:27017/nodeapihunt',
  { useNewUrlParser: true }
);

require('./src/models/Product/Product');

app.use('/api', require('./src/routes'));

app.listen(3001);
