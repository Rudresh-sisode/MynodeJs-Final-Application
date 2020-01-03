const express=require('express');
const app=express();
const fs=require('fs')
const port=process.env.PORT || 8008;
app.set('view engine','ejs')
app.use( express.static( "image" ) );


app.get('/',(req,res)=>{
    res.render('index',{title:"Node Js Final App"})
})

app.listen(port,()=> {
    console.log("server runing on port %s",port);
});

//define routes
