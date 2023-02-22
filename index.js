const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/user/:username/:userid', (req, res) => {
  res.send(`User ID: ${req.params.userid}. 
            User name: ${req.params.username}`);
})

const port = 3000;

app.listen(port, () => {
  console.log(`Start server: localhost:${port}`);
})