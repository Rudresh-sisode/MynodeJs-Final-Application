const express=require('express');
const app=express();
const fs=require('fs')
var db=require('./db')
var user=require('./model/user')
const port=process.env.PORT || 8008;
app.set('view engine','ejs')
app.use( express.static( "image" ) );


app.get('/',(req,res)=>{
    res.render('index',{title:"Node Js Final App"})

})

app.get('/sports',(req,res)=>{
    res.render('contactus')
})

app.get('/adminlog',(req,res)=>{
    res.render('register')
})


app.listen(port,()=> {
    console.log("server runing on port %s",port);
});

app.post('/checkadmin',(req,res)=>{

})

app.post('/registeradmin',(req,res)=>{
    console.log(req.body)
    

})



//define routes
