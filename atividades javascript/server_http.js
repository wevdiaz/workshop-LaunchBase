const http = require('http');

http.createServer(function (req, res) {
  return res.end("Servidor simples do Node")  
}).listen(5000);

console.log("Servidor funcionando!");
