/* APP.JS VA LANCIATA PER FAR PARTIRE L'APPLICAZIONE */

var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();


/* routing NOTA: __dirname è il path assoluto fino a qui */

app.get('/', function(req, res) {
  console.log("-reindirizzamento a index.hmtl");
  res.redirect('/index.html');
});

app.get('/index.html', function(req, res) {
  console.log("-ricevuta GET per index.hmtl");
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '/public/htmls/index.html'));
});

/* routing risorse non html */

app.get('/images/icona_menu.png', function(req, res) {
  console.log("-ricevuta GET per icona_menu.png");
  res.setHeader('Content-Type', 'image/x-icon');
  res.sendFile(path.join(__dirname, '/public/images/icona_menu.png'));
});

app.get('/images/icona_minus.png', function(req, res) {
  console.log("-ricevuta GET per icona_minus.png");
  res.setHeader('Content-Type', 'image/x-icon');
  res.sendFile(path.join(__dirname, '/public/images/icona_minus.png'));
});

app.get('/images/icona_plus.png', function(req, res) {
  console.log("-ricevuta GET per icona_plus.png");
  res.setHeader('Content-Type', 'image/x-icon');
  res.sendFile(path.join(__dirname, '/public/images/icona_plus.png'));
});

app.get('/javascripts/JSindex.js', function(req, res) {
  console.log("-ricevuta GET per JSindex.js");
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, '/public/javascripts/JSindex.js'));
});

app.get('/stylesheets/mystyle.css', function(req, res) {
  console.log("-ricevuta GET per mystyle.css");
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, '/public/stylesheets/mystyle.css'));
});



/* test TODO DA TOGLIERE */
app.get('/test.html', function(req, res) {
  console.log("-ricevuta GET per prova.hmtl");
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '/public/htmls/prova.html'));
});




app.listen(8080);

// catch 404 and forward to error handler TODO VALUTARE SE TOGLIERE
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log("errore è " + err);
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
