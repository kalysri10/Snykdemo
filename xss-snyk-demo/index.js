const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // user-controlled input (from query string)
  const userInput = req.query.msg || 'Hello demo';
  // passing user input directly to template
  res.render('index', { userInput });
});

app.listen(3000, () => console.log('Vulnerable demo running on http://localhost:3000'));

