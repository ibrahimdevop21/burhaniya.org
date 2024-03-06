import express from 'express';

const app = express();
const port = 3333;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/views/islam.ejs', (req, res) => {
  res.render('islam.ejs');
});

app.get('/views/sufi.ejs', (req, res) => {
  res.render('sufi.ejs');
});

app.get('/views/mag.ejs', (req, res) => {
  res.render('mag.ejs');
});

app.get('/views/library.ejs', (req, res) => {
  res.render('library.ejs');
});

app.get('/views/gallery.ejs', (req, res) => {
  res.render('gallery.ejs');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
// hom
// m,.
