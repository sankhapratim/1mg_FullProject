const User=require("../Mongo/usermongo")
var jwt = require('jsonwebtoken');
const Auth = require("../Routes/User");


require("dotenv").config()
let secreat=process.env.SECREAT_KEY

// console.log(process.env.SECREAT_KEY)

function Otpgenereator(){
    let val=Math.floor(Math.random()*90000) + 10000;
    return val
}

async function verfieddata(username){

  let present=await User.findOne({username})
  if(present)
  {
    let token=jwt.sign({username:username},"SUPER123",{
      expiresIn:"2h"
    })
   let refreshToken=jwt.sign({username:username},"SUPER123",{
      expiresIn:"5h"
    })
    await User.updateOne({username},{$set:{token:token,refreshToken:refreshToken}})

    let data=await User.findOne({username})
    return data

  }

    let token=jwt.sign({username:username},"SUPER123",{
        expiresIn:"2h"
      })
    let refreshToken=jwt.sign({username:username},"SUPER123",{
        expiresIn:"5h"
      })
    let data=new User({
        username:username,
        mobile:username, 
        token,
        refreshToken 
    })

    await data.save()
    console.log(data)
    return data
}





module.exports={Otpgenereator,verfieddata}