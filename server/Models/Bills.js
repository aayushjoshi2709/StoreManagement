const mongoose = require('mongoose')
const BillsSchema = mongoose.Schema({
    name: String,
    gstIn: String,
    products:[{type:String}],
    quantity:[{type:Number}],
    costs: [{type:Number}],
    total:Number,
    date: Date,
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Stores'
    }
})
module.exports = mongoose.model('bills', BillsSchema, 'Bills')