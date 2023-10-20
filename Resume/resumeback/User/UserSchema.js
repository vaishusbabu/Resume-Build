const mongoose=require('mongoose')



const userschema=mongoose.Schema({
    name:String,
    address:String,
    phone:Number,
    email:String,
    age:Number,
    gender:String,
    qualification:String,
    skills:String,
    experience:String,
    password:String,
    img:Object,

})
const usermodel=mongoose.model("User",userschema)

module.exports=usermodel