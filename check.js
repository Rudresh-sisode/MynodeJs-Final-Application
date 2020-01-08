function mongodb_find(){
    console.log('ok boss')
    var MongoClient =require('mongodb').MongoClient;
    var url="mongodb://localhost:27017/";
  
    MongoClient.connect(url,function(err,db){
      if(err) throw err;
      var db=db.db('nodeapp');
      db.collection('advertizements').find({}).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
        db.close();
      });
  
    });
  }