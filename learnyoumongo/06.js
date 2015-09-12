var mongo  = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/'+process.argv[2];

var collectName = process.argv[3];

var _id = process.argv[4];

mongo.connect(url, function(err, db) {
  if(err) throw err
  var collection = db.collection(collectName);
  collection.remove({
    _id: _id
  }, function(err, data){
    if(err) throw err;
    db.close();
  })
})
