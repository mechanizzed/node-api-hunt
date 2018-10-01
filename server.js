const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World teste');
});

app.listen(3001);
