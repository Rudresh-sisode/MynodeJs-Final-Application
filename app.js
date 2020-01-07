const express=require('express');
var parser=require('body-parser')
const app=express();
const fs=require('fs')
var db=require('./db')
var user=require('./model/user')
const port=process.env.PORT || 8008;
const sgMail=require('@sendgrid/mail')
app.set('view engine','ejs')
app.use( express.static( "image" ) );

app.use(parser.urlencoded({extended:true}));
app.use(parser.json())

const sendgridAPI='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';

sgMail.setApiKey(sendgridAPI)


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

    user.find({"email":req.body.email},(err,record)=>{
        console.log(record[0])
        if(err){
            console.log('error occured boss while loginin')
        }
        else if(record==null){
            console.log("no record found");
            res.json({"message":"no record found"});
        }
        else if(record[0].password !== req.body.password){
            console.log('user name and password is invalid')
            res.json({"message":"User name and password is invalid"})
        }
        else{
            console.log('excuted !! :-)')
            res.render('advertisement')
        }
    })

})

app.post('/registeradmin',(req,res)=>{
    
    /*res.json({"Status":"ok boss"})
    var name=req.body.password;
    console.log(name)*/
   console.log(req.body)
    var userCollection=new user()
   var name=req.body.name;
   console.log(name)
    

    var mesag=""
    var userCollection=new user();//orm -> mapped with schema or model

    if(req.body.email == undefined){
        res.json({"Status":500,"message":"username is mandatory, boss!","action":"please enter username"})
    }

    userCollection.name=req.body.name;
    userCollection.email=req.body.email;
    userCollection.password=req.body.password;
    userCollection.save((err,result)=>{
        if(err){
            console.log('Error while registering user')
            res.json({"Status":500,"message":"error ocured boss"})
        }
        else{
            res.json(result)

            sgMail.send({
                to: 'rudranrajput@gmail.com',
                from: 'rudranrajput@gmail.com',
                subject: 'Successfully registered',
                text: 'dear Admin your are now, accountable for advertisement'
            });
        }
    })

    

})



//define routes
