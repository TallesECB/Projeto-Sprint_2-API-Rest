const TableClient = require('./TableClient')
const dataNotProvided = require('../../errors/dataNotProvided')
const invalidData = require('../../errors/invalidData')

class Client {
    constructor({id, name, gender, city}) {
        this.id = id
        this.name = name
        this.gender = gender
        this.city = city
    }

    validate() {
        if(typeof this.name !== 'string' || this.name.length === 0) {
            throw new invalidData('name')
        }

        if(typeof this.gender !== 'string' || this.gender.length === 0) {
            throw new invalidData('gender')
        }

        if(typeof this.city !== 'string' || this.city.length === 0) {
            throw new invalidData('city')
        }
    } 

    async register () {
        this.validate()
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

        if(Object.keys(dataUpdate).length === 0 ) {
            throw new dataNotProvided()
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

module.exports = Client 

