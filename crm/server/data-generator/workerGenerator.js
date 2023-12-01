const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { Worker, Position } = require('../models/models');
const random = require('./randomize')

const workerGenerator = async (amount) => {

    const countPost = await Position.count()

    for (let i = 0; i < amount; i++) {

        let full_name = faker.person.fullName();
        let array = full_name.split(' ');
        let first_name = array[0];
        let second_name = array[1];

        let worker = {
            full_name: full_name,
            email: faker.internet.email(),
            phone: faker.phone.number(),
            passport: String(random.randomize(1000, 9999) + (random.randomize(100000,999999)).toString()),
            login: faker.internet.displayName({firstName: first_name, lastName: second_name}),
            password: faker.internet.password({length: 8}),
            positionId: (i % countPost) + 1,
            workerStatusId: random.randomize(1,3)
        }

        await Worker.create(worker)
    }
}

module.exports = workerGenerator