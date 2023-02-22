const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});


app.get('/user/:username/', (req, res) => {
  res.render('user', {username: req.params.username});
})

const port = 3000;

app.listen(port, () => {
  console.log(`Start server: localhost:${port}`);
})