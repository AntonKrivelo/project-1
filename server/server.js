const express = require('express');
const app = express();
require('dotenv').config();

const sequelize = require('./db');

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`The server is running on the port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

app.get('/', (req, res) => {
  res.send('The server is running!');
});

start();
