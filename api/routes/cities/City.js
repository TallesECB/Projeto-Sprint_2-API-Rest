const TableCity = require('./TableCity')

class City {
    constructor({name, state}) {
        this.name = name
        this.state = state
    }

    async register () {
        console.log(this.name)
        const result = await TableCity.register({
            name: this.name,
            state: this.state
        })

        this.id = result.id
    }

    //função não está retornando os valores corretamente, necessário verificar, se por um findOne, vai certinho, mas precisamos que seja all, 
    //pois pode ter mais de uma cidade com o mesmo nome / estado
    
    async consultName() {  
        const result = await TableCity.consultName(this.name)

        this.name = result.name
        this.state = result.state
    }

    async consultState() {  
        const result = await TableCity.consultState(this.state)

        this.name = result.name
        this.state = result.state
    }

}

module.exports = City

//metodos da rota