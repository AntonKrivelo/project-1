const express = require('express');
var cors = require('cors');
require('dotenv').config();
const app = express();

const models = require('./models/models');

const sequelize = require('./db');

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'WORKING!' });
});

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
