const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.render('index.ejs', { transparentNavbar: true });
// });

app.get('/', (req, res) => {
  res.render('nullreef.ejs');
});

app.get('/live', (req, res) => {
  const pageSettings = {
    transparentNavbar: true,
  };
  res.render('livestream.ejs', pageSettings);

});

app.get('/photos', (req, res) => {
  res.render('photos.ejs');
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});

// app.get('/photos2', (req, res) => {
//   res.render('photos2.ejs');
// });

// app.get('/photos3', (req, res) => {
//   res.render('photos3.ejs');
// });

app.listen(8000);
