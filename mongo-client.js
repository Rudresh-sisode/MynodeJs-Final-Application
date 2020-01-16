const mongodb=require('mongodb');

var MongoClient=mongodb.MongoClient;
const url='mongodb://localhost:27017/nodeapp';


MongoClient.connect(url,(err,db)=>{
    if(err){
        console.log("error while connecting to DB");
    }
    else{
        console.log("DB connected successfully");
       var collection=db.collection('advertizements').find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        });
    }
});

/*

collection.find(function(error,data){
            if(error){
                console.log("error while connecting to the logiuser table");
            }
            else{
                console.log("data received from the loginusers collection");
                console.log(data);

            }
         
        })
*/