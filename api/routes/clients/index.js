const router = require('express').Router()
const TableClient = require('./TableClient')
const Client = require('./Client')

router.post('/', async (request, answer) => {
    try {
        const clientdata = request.body
        const client = new Client(clientdata)
        await client.register()
        answer.status(201)
        answer.send(
            JSON.stringify(client)
        )
    } catch (erro) {
        answer.status(400)
        answer.send(
            JSON.stringify({
                message: erro.message
            })
        )
    }
})

router.get('/:idClient', async (request, answer) => {
    try {
        const id = request.params.idClient
        const client = new Client({id: id})
        
        await client.consultId()
        answer.status(200)
        answer.send(
            JSON.stringify(client)
        )
    } catch (erro) {
        answer.send(
            JSON.stringify({
                message: erro.message
            })
        )
    }

}) 

router.get('/consultName/:nameClient', async (request, answer) => {
    try {
        const name = request.params.nameClient
        const results = await TableClient.consultName(name)

        answer.status(200)
        answer.send (
            results
        ) 

    } catch (erro) {
        answer.send(
            JSON.stringify({
                message: erro.message
            })
        )
    }

}) 

router.put('/:idClient', async (request, answer) => {
    try {
        const data = Object.assign(
            request.body,
            {
                id: request.params.idClient
            }
        )

        const client = new Client(data)

        await client.change()
        await client.consultId()

        answer.status(200)
        answer.send(
            JSON.stringify(client)
        )
    } catch (erro) {
        answer.send(
            JSON.stringify({
                message: erro.message
            })
        )
    }

}) 

router.delete('/:idClient', async (request, answer) => {
    const idClient = {
        id: request.params.idClient
    }
    const client = new Client(idClient)
    
    await client.remove()
    answer.status(204)
    answer.end()
})

module.exports = router