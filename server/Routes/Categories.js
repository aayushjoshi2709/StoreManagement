const express = require('express')
const router = express.Router()
const Categories = require('../Models/Categories')
router.get('/',function(req, res){
    Categories.find({}, function(err, allCategories){
        if(err)
            console.log("Error getting categories")
        else
            res.json({"keys":Object.keys(Categories.schema.paths).slice(0,-2) ,"values": allCategories})
    })
})

router.post('/',function(req, res){
    const categoriesData = {
        Name: req.body.name,
        ParentCategory: req.body.parentCategory,
        Store: req.body.store
    }
    Categories.create(categoriesData, function(err, data){
        if(err)
            console.log('Error creating categories')
        else
            res.redirect('/categories')
    })
})
router.put('/:id',function(req, res){
    const id = req.params.id
    Categories.findByIdAndUpdate(id, req.body.categoriesData, function(err, updatedCategories){
        if(err)
            console.log('An error occoured while updating categories')
        else
            res.redirect('/categories')
    })
})
router.delete('/:id',function(req, res){
    const id = req.params.id
    Categories.findByIdAndRemove(id, function(err){
        if(err)
            console.log('Error deleting category')
        else
            res.redirect('/categories')
    })
})

module.exports = router