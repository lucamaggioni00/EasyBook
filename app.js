/* APP.JS VA LANCIATA PER FAR PARTIRE L'APPLICAZIONE */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bp = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));//TODO SERVE O TOLGO?


/* routing NOTA: __dirname è il path assoluto fino a qui */

app.get('/', (req, res) => {
  console.log("redirect to index.hmtl");
  res.redirect('/index');
});

app.get('/index', (req, res) => {
  console.log("received GET index.hmtl");
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '/public/htmls/index.html'));
});

app.get('/riepilogo', (req, res) => {
  console.log("received GET riepilogo.html");
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '/public/htmls/riepilogo.html'));
});

//TODO STO COSTRUENDO LA POST GESTITA DAL SERVER
app.post('/invia-ordine', (req, res) => {
  console.log("received POST invia-ordine");

  //console.log("nTavolo è " + req.body.nTavolo);
  //console.log(req.body);
  //console.info("Nome è " + req.body.Nome);
  //console.log("Q.tà è " + req.body.Quantita);

  res.send("Ordine inviato");
  // POST handling
  var nTavolo = req.body.nTavolo; // prende il tavolo
  var portate = ' ';
  for(var i=0; i<20; i++) {
    if(req.body.id[i] != null) { // prendo solo se esiste
      //console.log("-> prima temp è " + temp);
      var temp = 'piatto: ' + req.body.id[i] + ' con quantità ' + req.body.quantita[i];
      //console.log("-> dopo temp è " + temp);

      //console.log("-> prima portate è " + portate);
      var portate = portate + '\n' + temp;
      //console.log("-> dopo portate è " + portate);
    }
  }

  var today = String(new Date());
  today = today.substring(0, 25); // per poi stampare solo la data

  // scrive l'ordine in un txt
  fs.appendFile('Ordini.txt', '# ' + today + '\nNumero del tavolo: ' + nTavolo + '\n' + portate + '\n\n---------\n\n', (err) => {
    if(err) 
      throw err;
    console.log("L'ordine è stato scritto nel file Ordini.txt");
  });
});


/* routing risorse secondarie */

app.get('/images/icona_menu.png', (req, res) => {
  console.log("received GET icona_menu.png");
  res.setHeader('Content-Type', 'image/x-icon');
  res.sendFile(path.join(__dirname, '/public/images/icona_menu.png'));
});

app.get('/images/icona_minus.png', (req, res) => {
  console.log("received GET icona_minus.png");
  res.setHeader('Content-Type', 'image/x-icon');
  res.sendFile(path.join(__dirname, '/public/images/icona_minus.png'));
});

app.get('/images/icona_plus.png', (req, res) => {
  console.log("received GET icona_plus.png");
  res.setHeader('Content-Type', 'image/x-icon');
  res.sendFile(path.join(__dirname, '/public/images/icona_plus.png'));
});

app.get('/javascripts/JSindex.js', (req, res) => {
  console.log("received GET JSindex.js");
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, '/public/javascripts/JSindex.js'));
});

app.get('/javascripts/JSriepilogo.js', (req, res) => {
  console.log("received GET JSriepilogo.js");
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, '/public/javascripts/JSriepilogo.js'));
});

app.get('/stylesheets/mystyle.css', (req, res) => {
  console.log("received GET mystyle.css");
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, '/public/stylesheets/mystyle.css'));
});

app.get('/others/menu1.json', (req, res) => {
  console.log("received GET menu1.json");
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, '/public/others/menu1.json'));
});


/* test TODO DA TOGLIERE */
app.get('/test.html', (req, res) => {
  console.log("received GET prova.hmtl");
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
