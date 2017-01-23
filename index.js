const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(8000);
