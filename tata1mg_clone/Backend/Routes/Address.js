const {Router}=require("express")
const mongoose=require("mongoose")

const Addressdata=Router()


const Address=require("../Mongo/Address")


Addressdata.post("/address/:username",async(req,res)=>{
    const{address,city,pincode}=req.body
    const{username}=req.params

    let data=new Address({
        username:username,
        address,
        mobile,
        city,
        pincode,
        locality
    })
    
    await data.save()

    res.send({data:data,message:"successfull"})
})

Addressdata.get("/address/:username",async(req,res)=>{
    const{username}=req.params
    let data=await Address.findOne({username})
    console.log(data,"his is address")
    res.send({data:data,message:"addressdata"})
})


module.exports=Addressdata;