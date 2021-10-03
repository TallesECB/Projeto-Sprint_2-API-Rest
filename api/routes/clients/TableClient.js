const Model = require('./ModelTabelClients')
const instancia = require('../../database')
const dataNotFound = require('../../errors/dataNotFound')

module.exports = {
    register(client) {
        return Model.create(client)
    }, 
    async consultName(name) { 
        const result = await Model.findAll({
            where: {
                name: name
            }, raw: true
        })

        if (result.length === 0) {
            throw new dataNotFound('cliente', 'nome')
        }
        
        return result
    }, 
    async consultId(id) { //consultar cliente pelo id
        const result = await Model.findOne({
            where: {
                id: id
            }
        })

        if (!result) {
            throw new dataNotFound('cliente', 'id')
        }

        return result
    }, 
    remove (id) {
        return Model.destroy({
            where: {
                id: id
            }
        })
    }, 
    change(id, dataUpdate) { 
        return Model.update(dataUpdate, {
            where: {
                id: id
            }
        })
    } 
}