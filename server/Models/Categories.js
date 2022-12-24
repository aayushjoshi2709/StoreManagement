const mongoose = require('mongoose')
const categoriesSchema = mongoose.Schema({
    Name: String,
    ParentCategory: {type: mongoose.Schema.Types.ObjectId, ref:'Categories', default: null},
    Store: {type: mongoose.Schema.Types.ObjectId, ref:'Stores'}
})
module.exports = mongoose.model('categories', categoriesSchema, 'Categories');