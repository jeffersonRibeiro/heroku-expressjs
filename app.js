const express = require('express');

const { users } = require('./data/users');

const app = express();


app.get('/users', (req, res) => {
  res.send(users);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});