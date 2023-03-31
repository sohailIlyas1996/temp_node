const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.end('welcome to my first website');
      break;
    case '/about':
      res.end('welcome to my about page');
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <h1>404 Not Found</h1>
        <p>Well, I think you are looking for the wrong webpage</p>
        <a href="/" >Back to home</a>
      `);
  }
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
