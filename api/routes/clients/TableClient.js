const Model = require('./ModelTabelClients')
const instancia = require('../../database')

module.expors = {
    cadastrar(client) {}, //cadastrar cliente
    consultar(name) {}, //consultar cliente pelo nome
    consultar(id) {}, //consultar cliente pelo id
    remover(id) {}, //remover cliente pelo id
    alterar(id, updateClient) {} //atualizar cliente pelo id, essa função vai apenas alterar o nome dele, proponho para melhoria futura: alterar tbm o campo de genero e o de cidade
    
    //funções da rota
}