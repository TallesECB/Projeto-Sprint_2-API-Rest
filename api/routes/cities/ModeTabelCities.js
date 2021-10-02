const Sequelize = require('sequelize') //require para o metodo sequelize, para utiliza-lo pra criação de databases e tabelas
const instancia = require('../../database') //acessando a instancia, para passar a definição de tabela q eu desejo ter

const columns = {
    name: { //colunas da tabela, nome
        type: Sequelize.STRING, //tipo string
        allowNull: false //e ela precisa estar preenchida
    },
    state: { //colunas da tabela, estado
        type: Sequelize.STRING, //tipo string
        allowNull: false //e ela precisa estar preenchida
    }   
}

const options = { //opções do banco, como se eu quero freezar algum nome, e se sim qual o nome da tabela
    freezeTableName: true,
    tableName: 'Cities'
}

module.exports = instancia.define('city', columns, options) //definindo a instancia de criação do banco de dados


//modelo da tabela