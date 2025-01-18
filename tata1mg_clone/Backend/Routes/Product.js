const {Router}=require("express")
const Prod=require("../Mongo/productsmongo")
const Products=Router()
const mongoose=require("mongoose")

//getting all product data
//http://localhost:8080/alldata
Products.get("/alldata",async(req,res)=>{

    let data=await Prod.find({})

    res.send({data:data,message:"request successfull"})
})

//getting specfic product data by productname
//`http://localhost:8080/data/${productname}`
Products.get("/data/:id",async(req,res)=>{

    let value=req.params.id
    const userObjectId = mongoose.Types.ObjectId(value);
    console.log(value)
    let data=await Prod.findOne({_id:userObjectId})

    res.send({data:data,message:"request successfull"})
})

//filtering the products 
//`http://localhost:8080/filter?&brand=${brandname}` //give data of partcular brand
//`http://localhost:8080/filter?&discount=${10}` //show all products with dicount >= number
//`http://localhost:8080/filter?&rating=${4}`  //show all products with rating >= number

Products.get("/filter",async(req,res)=>{

    let data;
    if(req.query.brand)
    {
        data=await Prod.find({brand:req.query.brand})
        
    }
    else if(req.query.discount)
    {
        console.log(req.query.discount,"check num")
        data=await Prod.find({discount:{$gt:req.query.discount}})
    }
    else if(req.query.ratings)
    {
        console.log(req.query.ratings,"check num")
        data=await Prod.find({ratings:{$gte:req.query.ratings}})
        console.log(data,"hreee1121")
        console.log("fount")
    }

    

    res.send({data:data,message:"filtered successfully"})

})


//http://localhost:8080/slider?&limit=10&skip=0

// on button next increase the skip value by 10  
// on prev button decrase the skip value by 10
//total values in db 53
Products.get("/slider",async(req,res)=>{
    const{limit,skip}=req.query
    console.log(limit,skip)
    let data=await Prod.find({}).limit(limit).skip(skip)

    res.send({data:data,message:"valid data"})
})



module.exports=Products

