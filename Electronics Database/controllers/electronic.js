const express = require('express')

const electronicApi = require('../models/electronic.js')
const productApi = require('../models/product.js')

const electronicRouter = express.Router()

electronicRouter.get('/electronic/new', (req, res) => {
  res.render('electronic/createElectronicForm')
})

electronicRouter.get('/electronic/edit/:id', (req, res) => {
  electronicApi.getOneElectronic(req.params.id)
    .then((singleElectronic) => {
      res.render('electronic/editElectronicForm', {singleElectronic})
    })
})

// getAll
electronicRouter.get('/electronic', (req, res) => {
  electronicApi.getAllElectronics()
    .then((allElectronics) => {
      //res.json(allElectronics)
      res.render('electronic/allElectronic', {allElectronics})
    })
})
// getOne
electronicRouter.get('/electronic/:id', (req, res) => {
  electronicApi.getOneElectronic(req.params.id)
    .then((singleElectronic) => {

      productApi.getAllProductsByElectronicId(req.params.id)
        .then((electronicProducts) => {
          res.render('electronic/singleElectronic', {singleElectronic, electronicProducts})
        })


    })
})
// update
electronicRouter.put('/electronic/:id', (req, res) => {
  electronicApi.updateElectronic(req.params.id, req.body)
    .then((updatedElectronic) => {
      //res.json(updatedElectronic)
      res.redirect(`/electronic/${req.params.id}`)
    })
})
// create
electronicRouter.post('/electronic', (req, res) => {
  electronicApi.createElectronic(req.body)
    .then((createdElectronic) => {
      res.redirect("/electronic")
    })
})
// delete
electronicRouter.delete('/electronic/:id', (req, res) => {
  electronicApi.deleteElectronic(req.params.id)
    .then((deletedElectronic) => {
      //res.json(deletedElectronic)
      res.redirect("/electronic")
    })
})

module.exports = {
  electronicRouter
}
