const mongoose = require('mongoose')
const storesSchema = mongoose.Schema({
    Name: String,
    Address: String,
    PhoneNo: Number,
    email: String,
    Logo: String,
    gstIn: String
})
module.exports = mongoose.model('stores', storesSchema,'Stores');