const express = require('express')
const router = express.Router()
const Stores = require('../Models/Stores')

router.get('/',function(req, res){
    Stores.find({}, function(err, allStores){
        if(err)
            console.log("Error getting all the stores")
        else
            res.json({"keys":Object.keys(Stores.schema.paths).slice(0,-2) ,"values": allStores})
    })
})
router.post('/',function(req, res){
    storeData = {
        Name: req.body.name,
        Address: req.body.address,
        PhoneNo: req.body.phoneNo,
        email: req.body.email,
        Logo: req.body.logo,
        gstIn:req.body.gstIn
    }
    Stores.create(storeData, function(err, store){
        if(err)
            console.log("Error creating the store")
        else
            res.redirect('/stores')
    })
})
router.put('/:id',function(req, res){
    id = req.params.id
    Stores.findByIdAndUpdate(id, req.body.storeData, function(err, updatedStore){
        if(err)
            console.log("Error updating store")
        else
            res.redirect('/stores')
    })
})
router.delete('/:id',function(req, res){
    id = req.params.id
    Stores.findByIdAndRemove(id, function(err){
        if(err)
            console.log("Error deleting store")
        else
            res.redirect('/stores')
    })
})

module.exports = router