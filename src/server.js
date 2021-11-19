const express = require("express")
//const path = require("path")

const db = require ("./database/db")
const routes = require('./routes/routes')

const app = express()

//conexão com database
db.connect()

//habilita server para receber dados JSON
app.use(express.json())

//definindo rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}}`))
