var net = require('net');
var d = new Date();
var server = net.createServer(function(socket){
  var year = d.getFullYear().toString();
  var month = (d.getMonth() + 1).toString();

  if(month.length ==1){
    month = '0' + month;
  }

  var day = (d.getDate()).toString();

  if(day.length ==1){
    day = '0'+day;
  }

  var hours = d.getHours();
  if(hours.length == 1){
    hours = '0'+hours;
  }
  var mins = d.getMinutes().toString();
  if(mins.length==1){
    mins='0'+mins;
  }
  socket.end(year + '-' + month + '-' + day + ' ' + hours + ':' + mins + '\n');
});
server.listen(process.argv[2]);
