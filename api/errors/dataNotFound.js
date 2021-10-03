class dataNotFound extends Error {
    constructor(city,name){ 
        const message = `Não foi encontrado ${city} com este ${name}`
        super(message)
        this.name = 'dataNotFound'
        this.idErro = 1
    }
}

module.exports = dataNotFound