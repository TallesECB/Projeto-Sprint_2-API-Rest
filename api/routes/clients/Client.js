const TableClient = require('./TableClient')

class Client {
    constructor({id, name, gender, city}) {
        this.id = id
        this.name = name
        this.gender = gender
        this.city = city
    }

    async register () {
        console.log('teste')
        const result = await TableClient.register({
            name: this.name,
            gender: this.gender,
            city: this.city
        })

        this.id = result.id
    }

    async consultId() { 
        const result = await TableClient.consultId(this.id)

        this.name = result.name
        this.gender = result.gender
        this.city = result.city
    }

    async consultName() { 
        const result = await TableClient.consultName(this.name)

        this.name = result.name
        this.gender = result.gender
        this.city = result.city
    }

    async change() {
        const dataUpdate = {}

        if(typeof this.name === 'string' && this.name.length > 0) {
            dataUpdate.name = this.name
        }

        return TableClient.change(
            this.id,
            dataUpdate
        )

    }

    remove() {
        return TableClient.remove(this.id)
    }
}

module.exports = Client //exportando a função de cliente

//metodos da rota