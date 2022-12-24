const  mongoose  = require("mongoose");

const usersSchema = mongoose.Schema({
    Name: String, 
    UserName: String, 
    Email: String,
    Password: String,
    PhoneNo: String,
    UserType: String
});

module.exports = mongoose.model('users', usersSchema, 'Users');