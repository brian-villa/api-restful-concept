const router = require("express").Router()

const ProductController = require('../controllers/products')

router.get('/products', ProductController.get)
//router.post('/products', ProductController.post)
//router.put('/products/:id', ProductController.put)
//router.delete('/products/:id', ProductController.delete)

/* Verbos HTTP (4 tipos)

GET - OBTER DADOS
POST - ENVIAR DADOS
PUT - ATUALIZAR DADOS
DELETE - DELETAR DADOS

CRUD - CREATE READ UPDATE AND DELETE




*/

module.exports = router