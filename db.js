const  mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodeapp');
mongoose.connection.on('connected',()=>{

    console.log("db connected successfully");
});
mongoose.connection.on('error',()=>{
    console.log("error while connecting to DB");
});

mongoose.connection.on('disconnected',()=>{
    console.log("DB disconceted");
})