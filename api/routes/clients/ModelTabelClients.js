const Sequelize = require('sequelize') 
const instancia = require('../../database') 

const columns = {
    name: { 
        type: Sequelize.STRING, 
        allowNull: false 
    },
    gender: { 
        type: Sequelize.STRING, 
        allowNull: false 
    },
    city: { 
        type: Sequelize.STRING, 
        allowNull: false 
    }
}

const options = { 
    freezeTableName: true,
    tableName: 'Clients'
}

module.exports = instancia.define('client', columns, options) 
