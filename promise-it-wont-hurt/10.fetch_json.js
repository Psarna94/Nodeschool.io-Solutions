var qio = require('q-io/http');
var q = require('q');

qio.read('http://localhost:1337')
  .then(function(data){
    console.log(JSON.parse(data));
  })
  .then(null, console.log)
  .done()
