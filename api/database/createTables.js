const models = [ //array passando as duas tabelas, como objetos, caso eu queira criar outras, é só por mais um objeto ali da mesma forma
    require('../routes/cities/ModeTabelCities'),
    require('../routes/clients/ModelTabelClients')
]

async function createTables () {
    for (let counter = 0; counter < models.length; counter++) {
        const model = models[counter] //pega dinamicamente os modelos na ordem que a gente definiu, dentro da array de models utilizando o for, ele vai pegando 1 por 1
        await model.sync() //sincronizar nossa configuração do modelo atual, com a tabela atual, com o banco de dados
    }
}

createTables() //chamando a função para criar as tabelas, como elas tem o if not exists, ela só é criada, caso ainda não exista 

