const Sequelize = require('sequelize') 
const instancia = require('../../database') 

const columns = {
    name: { 
        type: Sequelize.STRING,
        allowNull: false 
    },
    state: { 
        type: Sequelize.STRING, 
        allowNull: false 
    }   
}

const options = { 
    freezeTableName: true,
    tableName: 'Cities'
}

module.exports = instancia.define('city', columns, options) 

