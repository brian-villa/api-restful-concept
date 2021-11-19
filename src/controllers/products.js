const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    let obj = {}

    if(id) {
        obj._id = id
    }

    const products = await ProductsModel.find(obj)
    
    
    res.send(products)

}

module.exports = {
    get,

}