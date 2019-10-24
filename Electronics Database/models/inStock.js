const mongoose = require('./connection.js')

const InStockSchema = new mongoose.Schema({
    name: String,
    //inStockId: mongoose.ObjectId,
})

const inStockCollection = mongoose.model('inStock', InStockSchema)

//getAll
const getAllinStock = () => {
    return inStockCollection.find({})
}
// get all inStocks By inStocky Id
const getAllinStockByinStockId = (productId) => {
    return inStockCollection.find({productId: productId})
}
//getOne
const getOneinStock = (id) => {
    return inStockCollection.findById(id)
}
//create
const createinStock = (inStockData) => {
    return inStockCollection.create(inStockData)
}
//update
const updateinStock = (id, inStockData) => {
    return inStockCollection.updateOne({_id: id}, inStockData)
}
//delete
const deleteinStock = (id) => {
    return inStockCollection.deleteOne({_id: id})
}

module.exports = {
    getAllinStock,
    getAllinStockByinStockId,
    getOneinStock,
    createinStock,
    updateinStock,
    deleteinStock
}
