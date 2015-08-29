var through = require('through2');
var split = require('split');
var stream = through(write, end);
var count = 0;
function write(buffer, encoding, next){
  if(count++ % 2 != 0){
    this.push(buffer.toString().toUpperCase()+'\n');
  }else{
    this.push(buffer.toString().toLowerCase()+'\n');
  }

  next();
};

function end(done){
  this.push(null);
  done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
