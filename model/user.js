var mongoose=require('mongoose')
var userSchema=new mongoose.Schema({
    name:{type:String,unique:true},
    email:{type:String,unique:true},
    password:{type:String}
})
module.exports=mongoose.model('loginadmin',userSchema)