var q = require('q');
var def= q.defer();

function attachTitle(arg){
  var temp = 'DR. ' + arg;
  return temp;
}

def.promise.
  then(attachTitle)
  .then(console.log);

  def.resolve('MANHATTAN');
