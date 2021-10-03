class dataNotProvided extends Error {
    constructor(){
        super('Não foram fornecidos dados para atualizar, por favor informe apenas o campo de nome!')
        this.name = 'dataNotProvided'
        this.idErro = 2
    }
}

module.exports = dataNotProvided