const mongodb=require('mongodb');

var MongoClient=mongodb.MongoClient;
const url='mongodb://localhost:27017/nodeapp';


MongoClient.connect(url,(err,db)=>{
    if(err){
        console.log("error while connecting to DB");
    }
    else{
        console.log("DB connected successfully");
       var collection=db.collection('advertizements');
    }
},{ useNewUrlParser: true});