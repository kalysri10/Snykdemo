// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = req.query.name || 'Guest';
  // Vulnerable: user input concatenated directly into HTML
  const html = '<!doctype html><html><body>' +
               '<h1>Welcome</h1>' +
               '<p>Hello ' + name + '</p>' +
               '</body></html>';
  res.send(html);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

