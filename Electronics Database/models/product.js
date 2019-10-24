const mongoose = require('./connection.js')

const ProductSchema = new mongoose.Schema({
    name: String,
    version: String,
    model: String,


 electronicId: mongoose.ObjectId,
})

const ProductCollection = mongoose.model('Product', ProductSchema)

//getAll
const getAllProducts = () => {
    return ProductCollection.find({})
}
// get all Products By Electronicy Id
const getAllProductsByElectronicId = (electronicId) => {
    return ProductCollection.find({electronicId: electronicId})
}
//getOne
const getOneProduct = (id) => {
    return ProductCollection.findById(id)
}
//create
const createProduct = (productData) => {
    return ProductCollection.create(productData)
}
//update
const updateProduct = (id, productData) => {
    return ProductCollection.updateOne({_id: id}, productData)
}
//delete
const deleteProduct = (id) => {
    return ProductCollection.deleteOne({_id: id})
}

module.exports = {
    getAllProducts,
    getAllProductsByElectronicId,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
