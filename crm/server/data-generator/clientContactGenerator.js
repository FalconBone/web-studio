const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { ClientContact, Client} = require('../models/models');
const random = require('./randomize')

const clientContactGenerate = async (amount) => {

    const count = await Client.count()

    for (let i = 0; i < amount; i++) {
        let clientContact = {
            full_name: faker.person.fullName(),
            description: faker.lorem.sentence(),
            position: faker.person.jobType(),
            clientId: random.randomize(1, count - 1)
        }  

        await ClientContact.create(clientContact)    
    }
}

module.exports = clientContactGenerate