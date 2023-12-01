const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { Client } = require('../models/models');

const clientGenerate = async (amount) => {
    for (let i = 0; i < amount; i++) {
        let name = faker.company.name();
        await Client.create({name})
    }
}

module.exports = clientGenerate