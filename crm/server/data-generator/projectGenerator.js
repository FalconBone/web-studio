const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const {Project, Deal, Worker} = require('../models/models');
const random = require('./randomize')

const projectGenerator = async () => {

    const countDeal = await Deal.count();
    const countWorkers = await Worker.count();

    for (let i = 1; i <= countDeal; i++) {

        const deal = await Deal.findByPk(i);

        const project = {
            name: deal.name,
            responcible_worker_id: random.randomize(1, countWorkers),
            dealId: i,
            start_date: faker.date.between({ from: '2017-01-01T00:00:00.000Z', to: '2023-01-01T00:00:00.000Z' })
        }

        await Project.create(project)
    }
}

module.exports = projectGenerator