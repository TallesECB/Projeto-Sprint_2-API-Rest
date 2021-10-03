const Model = require('./ModelTabelClients')
const instancia = require('../../database')
const dataNotFound = require('../../errors/dataNotFound')

module.exports = {
    register(client) { //cadastrar cliente
        console.log('teste')
        return Model.create(client)
    }, 
    async consultName(name) { //consultar cliente pelo nome. (em produção)
        const result = await Model.findAll({
            where: {
                name: name
            }, raw: true
        })

        if (result.length === 0) {
            throw new dataNotFound('cliente', 'nome')
        }
        
        console.log(result[0])
        
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
    remove (id) { //remover cliente pelo id
        console.log(id)
        return Model.destroy({
            where: {
                id: id
            }
        })
    }, 
    change(id, dataUpdate) { //atualizar cliente pelo id, essa função vai apenas alterar o nome dele, proponho para melhoria futura: alterar tbm o campo de genero e o de cidade
        console.log(dataUpdate, id)
        return Model.update(dataUpdate, {
            where: {
                id: id
            }
        })
    } 
    
    //funções da rota
}