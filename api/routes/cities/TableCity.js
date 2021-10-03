const Model = require('./ModelTabelCities')
const instancia = require('../../database')
const dataNotFound = require('../../errors/dataNotFound')

module.exports = {

    register(city) { 
        return Model.create(city)
    }, 
    async consultName(name) { 
        const result = await Model.findAll({
            where: {
                name: name
            }, raw: true
        })

        if (result.length === 0) {
            throw new dataNotFound('cidade', 'nome')
        }
        
        return result
    }, 
    async consultState(state) { 
        const result = await Model.findAll({
            where: {
                state: state
            }, raw: true
        })

        if (result.length === 0) {
            throw new dataNotFound('cidade', 'estado')
        }
        
        return result
    }
}