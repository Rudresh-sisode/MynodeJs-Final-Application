var mongoose=require('mongoose')
var userSchema=new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    url:{type:String},
    urltoimage:{type:String},
    publish:{type:String}
})
module.exports=mongoose.model('advertizement',userSchema)

 