const { fakerRU, faker } = require('@faker-js/faker/locale/ru');
const { Deal, Position, Service, DealStatus } = require('../models/models');
const random = require('./randomize')

const serviceGenerate = async () => {

    const positionCount = await Position.count()
    const dealsCount = await Deal.count()

    for (let i = 1; i <= dealsCount; i++) {

        const deal = await Deal.findByPk(i)
        const status = await DealStatus.findByPk(deal.dealStatusId)

        if (status.name !== 'Новая') {
            const bigProject = random.randomize(1, 10)

            for (j = 1; j <= positionCount; j++) {

                const position = await Position.findByPk(j)

                if (bigProject > 3 || position.name === 'Программист' || position.name === 'Верстальщик') {

                    const start_period = random.randomize(1, 12)
                    
                    let end_period = (start_period + random.randomize(4, 25))
                    if (end_period > deal.term) {
                        end_period = deal.term
                    }

                    console.log(`\n\n(${end_period} - ${start_period}) * ${position.hour_salary} = ${(end_period - start_period) * position.hour_salary}`);
                    await Service.create({
                        start_period: start_period,
                        end_period: end_period,
                        total: (end_period - start_period) * position.hour_salary,
                        dealId: i,
                        positionId: j
                    })
                }
            }
        }
    }
}


module.exports = serviceGenerate 