const mongoose = require('mongoose')
const debtsSchema = mongoose.Schema({
    TakenBy: String,
    Date: Date,
    Bill: {type:mongoose.Schema.Types.ObjectId, ref:'Bills'},
    IsResolved: Boolean
})
module.exports = mongoose.model('debts', debtsSchema, 'Debts')