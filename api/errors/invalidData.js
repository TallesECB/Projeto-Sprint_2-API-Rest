class invalidData extends Error {
    constructor(invalid) {
        const mensagem = `O Campo de '${invalid}' está inválido, favor verifique`
        super(mensagem)
        this.name = 'invalidData'
        this.idErro = 0
    }
}

module.exports = invalidData