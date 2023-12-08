const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { User} = require('../models/models');
const random = require('./randomize')

const userGenerate = async () => {

    for (let i = 0; i < 10; i++) {

        let full_name = faker.person.fullName();
        let array = full_name.split(' ');
        let first_name = array[0];
        let second_name = array[1];

        let user = {
            full_name: full_name,
            login: faker.internet.displayName({firstName: first_name, lastName: second_name}),
            password: faker.internet.password({length: 8})
        }

        await User.create(user)
    }
}

module.exports = userGenerate