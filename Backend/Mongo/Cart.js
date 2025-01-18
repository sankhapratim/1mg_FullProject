const mongoose=require("mongoose")



const CartSchema=mongoose.Schema({
    username:String,
    product_id:{type:Array,"default":[]},
    quantity:Number,
    Total:Number

})

const Cart=mongoose.model("cartmg",CartSchema)


module.exports=Cart