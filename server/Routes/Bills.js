const express = require('express')
const router = express.Router()
const Bills = require('../Models/Bills')
router.get('/',function(req, res){
    Bills.find({}, function(err, allBills){
        if(err)
            console.log('Error getting bills')
        else
            res.json({"keys":Object.keys(Bills.schema.paths).slice(0,-2) ,"values": allBills})
    })
})

router.post('/',function(req, res){
    const billData = {
        name: req.body.name,
        gstIn: req.body.gstIn,
        products:req.body.products,
        quantity:req.body.quantity,
        costs: req.body.costs,
        total:req.body.total,
        date:req.body.date,
        store: req.body.store
    }
    Bills.create(billData, function(err, data){
        if(err)
            console.log('Error creating bill')
        else
            res.redirect('/bills')
    })
})
router.put('/:id',function(req, res){
    const id = req.params.id
    Bills.findByIdAndUpdate(id, req.body.billData, function(err, updatedBill){
        if(err)
            console.log("An error occoured while updating bill")
        else
            res.redirect('/bills')
    })
})
router.delete('/:id',function(req, res){
    const id = req.params.id
    Bills.findByIdAndDelete(id, function(err){
        if(err)
            console.log('Error deleting bills')
        else
            res.redirect('/bills')
    })
})
module.exports = router