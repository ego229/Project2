const express = require('express')

const productApi = require('../models/product.js')

const productRouter = express.Router()

productRouter.get('/product/new', (req, res) => {
  res.render('product/createProductForm')
})

productRouter.get('/product/new/:electronicId', (req, res) => {
  res.render('product/createProductForm', {electronicId: req.params.electronicId})
})

productRouter.get('/product/edit/:id', (req, res) => {
  productApi.getOneProduct(req.params.id)
    .then((singleProduct) => {
      res.render('product/editProductForm', {singleProduct})
    })
  
})

// getAll
productRouter.get('/product', (req, res) => {
  productApi.getAllProducts()
    .then((allProducts) => {
      //res.json(allProducts)
      res.render('product/allProduct', {allProducts})
    })
     
})
// getOne
productRouter.get('/product/:id', (req, res) => {
  productApi.getOneProduct(req.params.id)
    .then((singleProduct) => {
      //res.json(singleProduct)
      res.render('product/singleProduct', {singleProduct})
    })
     
})
// update
productRouter.put('/product/:id', (req, res) => {
  productApi.updateProduct(req.params.id, req.body)
    .then((updatedProduct) => {
      //res.json(updatedProduct)`
      res.redirect(`/product/${req.params.id}`)
    })
     
})
// create
productRouter.post('/product', (req, res) => {
  productApi.createProduct(req.body)
    .then((createdProduct) => {
      res.redirect("/product")
    })
     
})
// delete
productRouter.delete('/product/:id', (req, res) => {
  productApi.deleteProduct(req.params.id)
    .then((deletedProduct) => {
      //res.json(deletedProduct)
      res.redirect("/product")
    })
     
})

module.exports = {
  productRouter
}
