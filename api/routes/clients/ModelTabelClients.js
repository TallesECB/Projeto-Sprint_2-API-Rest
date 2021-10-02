const Sequelize = require('sequelize') //require para o metodo sequelize, para utiliza-lo pra criação de databases e tabelas
const instancia = require('../../database') //acessando a instancia, para passar a definição de tabela q eu desejo ter

const columns = {
    nameComplet: { //colunas da tabela, nome completo
        type: Sequelize.STRING, //tipo string
        allowNull: false //e ela precisa estar preenchida
    },
    gender: { //colunas da tabela, genero
        type: Sequelize.STRING, //tipo string
        allowNull: false //e ela precisa estar preenchida
    },
    city: { //colunas da tabela, cidade
        type: Sequelize.STRING, //tipo string
        allowNull: false //e ela precisa estar preenchida
    }
}

const options = { //opções do banco, como se eu quero freezar algum nome, e se sim qual o nome da tabela
    freezeTableName: true,
    tableName: 'Clients'
}

module.exports = instancia.define('client', columns, options) //definindo a instancia de criação do banco de dados



//modelo da tabela