const router = require('express').Router()
const TableCity = require('./TableCity')
const City = require('./City')


router.post('/', async (request, answer) => {
    try {
        const cityData = request.body
        const city = new City(cityData)

        await city.register()
        
        answer.status(201)
        answer.send(
            JSON.stringify(city)
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

router.get('/consultName/:nameCity', async (request, answer) => {
    try {
        const name = request.params.nameCity
        const results = await TableCity.consultName(name)

        answer.status(200)
        answer.send (
            results
        ) 
    } catch (erro) {
        answer.send (
            JSON.stringify({
                message: erro.message
            })
        )
    }

}) 

router.get('/consultState/:stateCity', async (request, answer) => {
    try {
        const state = request.params.stateCity
        const results = await TableCity.consultState(state)

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


module.exports = router