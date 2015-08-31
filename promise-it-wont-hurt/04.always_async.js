var q = require('q');
var def = q.defer();

def.promise.then(console.log);
console.log("FIRST");
def.resolve('SECOND');
