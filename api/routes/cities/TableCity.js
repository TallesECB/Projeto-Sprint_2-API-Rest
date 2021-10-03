const Model = require('./ModelTabelCities')
const instancia = require('../../database')

module.exports = {

    register(city) { //cadastrar city
        console.log('teste')
        return Model.create(city)
    }, 
    
    //função não está retornando os valores corretamente, necessário verificar, se por um findOne, vai certinho, mas precisamos que seja all, 
    //pois pode ter mais de uma cidade com o mesmo nome / estado
    async consultName(name) { //consultar city pelo nome.
        const result = await Model.findAll({
            where: {
                name: name
            }, raw: true
        })

        if (!result) {
            throw new Error('Não foi encontrado cidades, com este nome')
        }

        return result
    }, 
    async consultState(state) { //consultar city pelo id
        const result = await Model.findAll({
            where: {
                state: state
            }, raw: true
        })

        if (!result) {
            throw new Error('Não foi encontrado cidades, com este estado')
        }

        return result
    }
    //funções da rota
}