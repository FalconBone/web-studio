const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { Client, ClientForm, Deal } = require('../models/models');
const random = require('./randomize');

const dealGenerate = async () => {
    const count = await ClientForm.count()
    
    for (let i = 1; i <= count; i++) {

        const clientForm = await ClientForm.findByPk(i)
        const client = await Client.findOne({where:{
            id: clientForm.dataValues.clientId
        }})

        let deal = {
            name: `Сайт ${faker.company.name()}`,
            creatingDate: faker.date.between({ from: '2016-01-01T00:00:00.000Z', to: '2023-01-01T00:00:00.000Z' }),
            term: random.randomize(5,30),
            budget: random.randomize(6000, 100000),
            clientFormId: i,
            clientId: client.dataValues.id,
            timeTypeId: random.randomize(1,3),
            dealStatusId: random.randomize(1,5)
        }
        await Deal.create(deal)
    }

}

module.exports = dealGenerate