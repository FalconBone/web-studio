const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { Client, ClientForm } = require('../models/models');
const random = require('./randomize')

const clientFormGenerate = async (amount) => {

    const count = await Client.count()
    
    for (let i = 0; i <= amount; i++) {
        if (i < count) {
            let clientForm = {
                text: faker.lorem.sentences(5),
                clientId: i + 1
            }
            await ClientForm.create(clientForm)
        } else {
            let clientForm = {
                text: faker.lorem.sentences(5),
                clientId: random.randomize(1, count - 1)
            }
            await ClientForm.create(clientForm)
        }
        
    }
}

module.exports = clientFormGenerate