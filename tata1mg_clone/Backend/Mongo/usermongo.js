const mongoose=require("mongoose")




const userSchema=mongoose.Schema({
    username:String,
    password:String,
    token:String,
    refreshToken:String,
    email:String,
    mobile:Number
})

const User=mongoose.model("usermg",userSchema)


module.exports=User