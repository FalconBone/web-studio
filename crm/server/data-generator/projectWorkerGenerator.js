const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { Project, Worker, ProjectWorker } = require('../models/models');
const random = require('./randomize')

const projectWorkerGenerate = async () => {
    
    const workerCount = await Worker.count()
    const projectCount = await Project.count()
    const designers = await Worker.findAndCountAll({where: {positionId: 7}})
    const programmers = await Worker.findAndCountAll({where: {positionId: 3}})

    for (let i = 1; i <= projectCount; i++) {

        const designer = designers.rows[random.randomize(0, designers.count - 1)]
        const programmer = programmers.rows[random.randomize(0, programmers.count - 1)]
        // const bool = random.randomize(0, 1);//большой проект или маленький

        // if (bool) {
        //     for (let j = 1; j <= productsCount; j++) {
        //         let isInDeal = random.randomize(1, 10);
        //         if (isInDeal < 2) {

        //             const product = await Product.findByPk(j)
        //             const deal = await Deal.findByPk(i)

        //             const amount = random.randomize(1,6)
        //             await ProductDeal.create({
        //                 productId: product.id,
        //                 dealId: deal.id,
        //                 amount: amount,
        //                 total: amount * product.price
        //             })   
        //         }
        //     }
        // }
        await ProjectWorker.create({
            workerId: designer.dataValues.id,
            projectId: i
        })
        await ProjectWorker.create({
            workerId: programmer.dataValues.id,
            projectId: i
        })
    }
}

module.exports = projectWorkerGenerate