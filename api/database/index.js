const Sequelize = require('sequelize') //require para o metodo sequelize, para utiliza-lo pra criação de databases e tabelas
const config = require('config')

const instancia = new Sequelize( //utilizando o metodo Sequelize, para criação do banco de dados e tabelas
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
)

module.exports = instancia