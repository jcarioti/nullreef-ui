const express = require('express');
const app = express();
const csrf = require('csurf')
const cookieParser = require('cookie-parser');
const csrfProtection = csrf({ cookie: true });
const bodyParser = require('body-parser');
const parseForm = bodyParser.urlencoded({ extended: false });
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(cookieParser());

app.get('/apex-voice/accounts/link', csrfProtection, (req, res) => {
  const clientId = req.query.client_id;
  console.log('validate clientid', clientId);
  res.render('linkApex.ejs', {
    csrfToken: req.csrfToken(),
    state: req.query.state,
    redirect_uri: req.query.redirect_uri
  });
});

app.post('/apex-voice/accounts', parseForm, csrfProtection, (req, res) => {
  const state = req.body.state;
  const redirect_uri = req.body.redirect_uri;
  const code = 'newcode';
  const email = req.body.email;
  const apexId = req.body.apexId;
  console.log({
    state,
    redirect_uri,
    code,
    email,
    apexId
  });

  res.render('linked.ejs', {
    csrfToken: req.csrfToken(),
    state,
    redirect_uri,
    code,
    email,
    apexId
  });
});

app.get('/', (req, res) => {
  res.render('index.ejs');
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

app.get('/link', csrfProtection, (req, res) => {

  res.render('link.ejs');
})

app.listen(8000);
