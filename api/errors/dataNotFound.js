class dataNotFound extends Error {
    constructor(fieldOne,fieldTwo){ 
        const message = `Não foi encontrado ${fieldOne} com este ${fieldTwo}`
        super(message)
        this.name = 'dataNotFound'
        this.idErro = 1
    }
}

module.exports = dataNotFound