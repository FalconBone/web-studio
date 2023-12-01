const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { ClientContact, ClientPhone} = require('../models/models');
const random = require('./randomize')

const clientPhoneGenerate = async (amount) => {

    const count = await ClientContact.count()

    for (let i = 0; i <= amount; i++) {
        let clientPhone;
        if (i < count) {
            clientPhone = {
                number: faker.phone.number(),
                clientContactId: i + 1
            }  
        } else {
            clientPhone = {
                number: faker.phone.number(),
                clientContactId: random.randomize(1, count - 1)
            }    
        }
        
        await ClientPhone.create(clientPhone)    
    }
}

module.exports = clientPhoneGenerate