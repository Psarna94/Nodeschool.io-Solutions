var http = require('http');
var fs = require('fs');

var server = http.createServer(function(reqest, response){
  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(8000);
