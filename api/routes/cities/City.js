const TableCity = require('./TableCity')
const invalidData = require('../../errors/invalidData')

class City {
    constructor({name, state}) {
        this.name = name
        this.state = state
    }

    validate() {
        if(typeof this.name !== 'string' || this.name.length === 0) {
            throw new invalidData('name')
        }
        if(typeof this.state !== 'string' || this.state.length === 0) {
            throw new invalidData('state')
        }
    }

    async register () {
        this.validate()
        const result = await TableCity.register({
            name: this.name,
            state: this.state
        })

        this.id = result.id
    }

}

module.exports = City

