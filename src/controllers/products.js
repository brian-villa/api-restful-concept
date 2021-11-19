const { response } = require('express')
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

async function post(req, res) {
    const {
        name, 
        brand,
        price
    } = req.body

    console.log(req.body)

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()
    
    res.send({
        message: 'sucess'
    }) // devolvendo info a API
}

async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id}, req.body, { new: true })

    res.send({
        message: "success",
        product,
    })

    /* const product = await ProductsModel.findOne({ _id: id })

    await product.updateOne(req.body)

    res.send({
        message: 'success',
        product,
    })
    
    TRECHO DE CÓDIGO QUE ALTERA O CONTEUDO JSON DE UM PRODUTO MAS RETORNA O PRODUTO NO POSTMAN COM O FORMATO ANTERIOR À ALTERAÇÃO
    
    */
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

    let message = "success"

    if(!remove.ok) {
        let message = "error"
    }

    res.send({
        message,
    })
}
module.exports = {
    get,
    post,
    put,
    remove,

}