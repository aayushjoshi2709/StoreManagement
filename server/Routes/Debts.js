const express = require('express')
const router = express.Router()
const Debts = require('../Models/Debts')
router.get('/',function(req, res){
    Debts.find({}, function(err, allDebts){
        if(err)
            console.log('Error getting products')
        else
            res.json({"keys":Object.keys(Debts.schema.paths).slice(0,-2) ,"values": allDebts})
    })
})

router.post('/',function(req, res){
    const debtData = {
        TakenBy: req.body.TakenBy,
        Date: req.body.date,
        Bill: req.body.bill,
        Ammount: req.body.ammount,
        IsResolved: req.body.isResolved
    }
    Debts.create(debtData, function(err, data){
        if(err)
            console.log("An error occoured while creating debt")
        else
            res.redirect('/debts')
    })
})
router.put('/:id',function(req, res){
    id = req.params.id
    Debts.findByIdAndUpdate(id, req.body.debtData, function(err, updatedDebt){
        if(err)
            console.log("An error occoured while updating debt")
        else
            res.redirect('/debts')
    })
})
router.delete('/:id',function(req, res){
    const id = req.params.id
    Debts.findByIdAndRemove(id, function(err){
        if(err)
            console.log('Error deleting debt')
        else
            res.redirect('/debts')
    })
})
module.exports = router