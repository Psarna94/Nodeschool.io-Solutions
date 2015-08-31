var qio = require('q-io/http');

qio.read('http://localhost:7000')
  .then(function(data){
    return qio.read('http://localhost:7001/' + data);
  })
  .then(function(user){
    console.log(JSON.parse(user));
  })
  .then(null, console.log)
  .done();
