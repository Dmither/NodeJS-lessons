const http = require('http');
const fs = require('fs');

let server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  
  if (request.url == '/' || request.url == '/index.html'){
    // створити потік, який частинами зчитує інформацію з файла
    // після зчитування частина відправляється на сервер
    fs.createReadStream('./index.html').pipe(response);
  } else if (request.url == '/about' || request.url == '/about.html'){
    fs.createReadStream('./about.html').pipe(response);
  } else {
    // обробка неправильних адрес
    fs.createReadStream('./error.html').pipe(response);
  }

});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => { })