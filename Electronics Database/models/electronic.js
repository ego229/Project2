const mongoose = require('./connection.js')

const ElectronicSchema = new mongoose.Schema({
 name: String,
 type: String,
 
})

const ElectronicCollection = mongoose.model('Electronic', ElectronicSchema)

//getAll
const getAllElectronics = () => {
    return ElectronicCollection.find({})
}
//getOne
const getOneElectronic = (id) => {
    return ElectronicCollection.findById(id)
}
//create
const createElectronic = (ElectronicData) => {
    return ElectronicCollection.create(ElectronicData)
}
//update
const updateElectronic = (id, ElectronicData) => {
    return ElectronicCollection.updateOne({_id: id}, ElectronicData)
}
//delete
const deleteElectronic = (id) => {
    return ElectronicCollection.deleteOne({_id: id})
}

module.exports = {
    getAllElectronics,
    getOneElectronic,
    createElectronic,
    updateElectronic,
    deleteElectronic
}
