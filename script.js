const http = require('http');
http.createServer(function () {
    res.writeHead(200,{'Content-Type':'text/plain'});

    res.end('hello node.js');

}).listen(3000, 'localhost',function () {
    console.log('Running~~~');
});