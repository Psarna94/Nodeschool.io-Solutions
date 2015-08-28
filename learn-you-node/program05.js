var fs = require('fs');

fs.readdir(process.argv[2], function(err,list){
  if(err){
    console.log('There is some error')
  }else{
    list.forEach(function(foo){
      if(foo.indexOf('.'+process.argv[3])>-1){
        console.log(foo);
      }
    })
  }


})
