var mongoose=require('mongoose')
var userSchema=new mongoose.Schema({
    name:{type:String,unique:true},
    email:{type:String,unique:true},
    password:{type:String},
    admin:{type:Boolean}
})
module.exports=mongoose.model('loginadmin',userSchema)