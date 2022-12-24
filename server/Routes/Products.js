const express = require('express')
const router = express.Router()
const Products = require('../Models/Products')
router.get('/',function(req, res){
    Products.find({}, function(err, allProducts){
        if(err)
            console.log("Error getting products")
        else
            res.json({"keys":Object.keys(Products.schema.paths).slice(0,-2) ,"values": allProducts})
    })
})

router.post('/',function(req, res){
    const productData = {
        Name: req.body.name,
        Price: req.body.price,
        Description: req.body.desc,
        Quantity: req.body.quantity,
        InStock: req.body.inStock,
        Weight: req.body.Weight,
        Manufacturer: req.body.manufacturer,
        Category: req.body.categoryId
    }
    Products.create(productData, function(err, product){
        if(err)
            console.log("Error creating product")
        else
            res.redirect('/products')
    })
})
router.put('/:id',function(req, res){
    id = req.params.id
    Products.findByIdAndUpdate(id, req.body.productData, function(err, updatedProduct){
        if(err)
            console.log('Error updating product')
        else
            res.redirect('/products')
    })
})
router.delete('/:id',function(req, res){
    id = req.params.id
    Products.findByIdAndRemove(id, function(err){
        if(err)
            console.log("Error deleting products")
        else
            res.redirect('/products')
    })
})
module.exports = router