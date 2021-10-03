const Model = require('./ModelTabelCities')
const instancia = require('../../database')
const dataNotFound = require('../../errors/dataNotFound')

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

        if (result.length === 0) {
            throw new dataNotFound('cidade', 'nome')
        }
        
        console.log(result[0])
        
        return result
    }, 
    async consultState(state) { //consultar city pelo estado
        const result = await Model.findAll({
            where: {
                state: state
            }, raw: true
        })

        if (result.length === 0) {
            throw new dataNotFound('cidade', 'estado')
        }
        
        console.log(result[0])
        
        return result
    }
    //funções da rota
}