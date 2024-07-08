const mongoose = require('mongoose');

const productSchema=mongoose.Schema({
    price:{type:Number,required:true},
    name:{type:String,required:true},
    description:{type:Stringr,required:true},
})
module.exports=mongoose.model('Product',productSchema);