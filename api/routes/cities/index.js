const router = require('express').Router()
const TableCity = require('./TableCity')
const City = require('./City')

router.post('/', async (request, answer) => {
    console.log('teste')
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
    console.log(request.params) 
    try {
        const name = request.params.nameCity
        const city = new City({name: name})

        await city.consultName()
        answer.status(200)
        answer.send(
            JSON.stringify(city)
        )
    } catch (erro) {
        answer.send(
            JSON.stringify({
                message: erro.message
            })
        )
    }

}) 

router.get('/consultState/:stateCity', async (request, answer) => {
    console.log(request.params) 
    try {
        console.log(request.params) 
        const state = request.params.stateCity
        const city = new City({state: state})
        
        await city.consultState()
        answer.status(200)
        answer.send(
            JSON.stringify(city)
        )
    } catch (erro) {
        answer.send(
            JSON.stringify({
                message: erro.message
            })
        )
    }

}) 



//rota

module.exports = router