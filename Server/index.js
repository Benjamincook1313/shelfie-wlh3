require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const app = express()

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db)
  })
  .catch(err => console.log(err))

app.get('/api/inventory', ctrl.getAll)
app.post('/api/product', ctrl.createProduct)
app.put('/api/product/:id', ctrl.updateProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)


app.listen(SERVER_PORT, console.log(`Listening on ${SERVER_PORT}`))