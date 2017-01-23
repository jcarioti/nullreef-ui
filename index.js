const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs', { transparentNavbar: true });
});

app.get('/live', (req, res) => {
  res.render('livestream.html');
});

app.get('/photos', (req, res) => {
  res.render('photos.html');
});

app.get('/contact', (req, res) => {
  res.render('contact.html');
});

app.listen(8000);
