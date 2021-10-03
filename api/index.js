const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const routerClient = require('./routes/clients')
app.use('/api/clients', routerClient)

const routerCity = require('./routes/cities')
app.use('/api/cities', routerCity)


app.listen(config.get('api.porta'), () => console.log('A API está funcionando!'))