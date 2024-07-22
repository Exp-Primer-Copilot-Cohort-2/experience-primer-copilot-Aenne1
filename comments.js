// Create web server

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.readFile('./comments.html', function (err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (req.url === '/comments') {
    fs.readFile('./comments.json', function (err, data) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>Page not found</h1>');
    res.end();
  }
}).listen(3000);