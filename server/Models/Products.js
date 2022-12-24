const mongoose = require("mongoose")
const productsSchema = mongoose.Schema({
    Name:String,
    Price:Number,
    InStock:Boolean,
    Quantity:Number,
    Description:String,
    Weight:Number,
    Manufacturer:String,
    Category:{type: mongoose.Schema.Types.ObjectId, ref:'Category'}
})
module.exports = mongoose.model('products', productsSchema, 'Products')