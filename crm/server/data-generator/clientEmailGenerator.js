const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { ClientContact, ClientEmail} = require('../models/models');
const random = require('./randomize')

const clientEmailGenerate = async (amount) => {

    const count = await ClientContact.count()

    for (let i = 0; i < amount; i++) {

        let clientEmail = {
            email: faker.internet.email(),
            clientContactId: random.randomize(1, count - 1)
        }  
        
        await ClientEmail.create(clientEmail)    
    }
}

module.exports = clientEmailGenerate