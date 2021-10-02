const TableClient = require('./TableClient')

class Client {
    constructor({id, name, gender, city}) {
        this.id = id
        this.name = name
        this.gender = gender
        this.city = city
    }
}


//metodos da rota