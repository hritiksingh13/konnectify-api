const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV;
const app = express();

app.get('/api/test', async (req, res) => {
  try {
    const users = await Promise.resolve([
      'Hritik',
      'Saurabh',
      'Ayushmaan',
      'Jatin',
      'Isheeta',
    ]);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const server = app.listen(port, () =>
  console.log(`${env} server is running on port: ${port}`)
);

module.exports = server;
