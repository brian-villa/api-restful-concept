const express = require("express")
const cors = require('cors')

const db = require ("./database/db")
const routes = require('./routes/routes')

const app = express()

//conexão com database
db.connect()


const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br'
]
//habilita cors
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true
        
        //mobile app
        if(!origin) {
            allowed = true
        }

        if(!allowedOrigins.includes(origin)) {
            allowed = false

        } 
            

        callback(null, allowed)
    }
}))

//habilita server para receber dados JSON
app.use(express.json())

//definindo rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}}`))
 