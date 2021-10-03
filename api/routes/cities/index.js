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
    /*try {
        const name = request.params.nameCity
        const city = new City({name: name})

        await city.consultName()
        console.log(city + 'oi 2')
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
    }*/

    try {
        const name = request.params.nameCity
        const results = await TableCity.consultName(name)

        console.log(results)

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
    console.log(request.params) 
    try {
        const state = request.params.stateCity
        const results = await TableCity.consultState(state)

        console.log(results)

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



//rota

module.exports = router