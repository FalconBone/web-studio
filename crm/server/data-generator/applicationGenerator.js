const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { Application } = require('../models/models');
const random = require('./randomize')

const applicationGenerate = async (amount) => {
    
    for (let i = 0; i <= amount; i++) {

        let application = {
            full_name: faker.person.fullName(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            text: faker.lorem.text()
        }

        await Application.create(application)
    }
}

module.exports = applicationGenerate