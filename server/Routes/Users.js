const express = require('express')
const Users = require('../Models/Users')
const router = express.Router()
const users = require('../Models/Users')

router.get('/',function(req, res){
    Users.find({}, function(err, allUsers){
        if(err)
            console.log("Error getting users")
        else
            res.json({"keys":Object.keys(Users.schema.paths).slice(0,-2) ,"values": allUsers})
    })
})

router.post('/', function(req, res){
    data = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phoneno: req.body.phoneno,
        usertype: req.body.usertype
    }
    users.create(data, function(error, newlyCreated){
        if(err){
            console.log("Error creating campground")
        }else{
            res.redirect("/users")
        }
    })
})

router.put('/:id',function(req, res){
    id = req.params.id;
    Users.findByIdAndUpdate(id, req.body.userData, function(err, updatedUser){
        if(err){
            console.log("Error updating user")
        }else{
            res.redirect("/users")
        }
    })
})

router.delete('/:id',function(req, res){
    id = req.params.id;
    Users.findByIdAndRemove(id, function(err){
        if(err){
            console.log("Error deleting user")
        }else{
            res.redirect('/users')
        }
    })
})
module.exports = router