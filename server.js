const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('The server is running!');
});

app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`);
});
