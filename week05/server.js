const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req");
  console.log(req.headers)
  res.setHeader('Content-Type','text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plan'});
  res.end('ok');
})

server.listen(8088);