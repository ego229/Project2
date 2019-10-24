const express = require('express')

const inStockApi = require('../models/inStock.js')

const inStockRouter = express.Router()

inStockRouter.get('/inStock/new', (req, res) => {
  res.render('inStock/createinStockForm')
})

inStockRouter.get('/inStock/new/:inStockId', (req, res) => {
  res.render('inStock/createinStockForm', {inStockId: req.params.inStockId})
})

inStockRouter.get('/inStock/edit/:id', (req, res) => {
  inStockApi.getOneinStock(req.params.id)
    .then((singleinStock) => {
      res.render('inStock/editinStockForm', {singleinStock})
    })
  
})

// getAll
inStockRouter.get('/inStock', (req, res) => {
  inStockApi.getAllinStock()
    .then((allinStock) => {
      //res.json(allinStocks)
      res.render('inStock/allinStock', {allinStock})
    })
     
})
// getOne
inStockRouter.get('/inStock/:id', (req, res) => {
  inStockApi.getOneinStock(req.params.id)
    .then((singleinStock) => {
      //res.json(singleinStock)
      res.render('inStock/singleinStock', {singleinStock})
    })
     
})
// update
inStockRouter.put('/inStock/:id', (req, res) => {
  inStockApi.updateinStock(req.params.id, req.body)
    .then((updatedinStock) => {
      //res.json(updatedinStock)`
      res.redirect(`/inStock/${req.params.id}`)
    })
     
})
// create
inStockRouter.post('/inStock', (req, res) => {
  inStockApi.createinStock(req.body)
    .then((createdinStock) => {
      res.redirect("/inStock")
    })
     
})
// delete
inStockRouter.delete('/inStock/:id', (req, res) => {
  inStockApi.deleteinStock(req.params.id)
    .then((deletedinStock) => {
      //res.json(deletedinStock)
      res.redirect("/inStock")
    })
     
})

module.exports = {
  inStockRouter
}


