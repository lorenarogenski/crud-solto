const express = require('express')
const app = express()
const port = 3000

const cep_endereco = require('./middlewares/cep_endereco.js')

app.use(express.json())
app.post('/', cep_endereco, (req, res) => {
    res.json(req.body)
})

app.listen(port)