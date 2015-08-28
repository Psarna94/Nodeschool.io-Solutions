var filter = require('./program06-1');

filter(process.argv[2], process.argv[3], function(err, list){
  if (err) return console.error('err: ', err);

  list.forEach(function(dirname){
    console.log(dirname);
  });
});
