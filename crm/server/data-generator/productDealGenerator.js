const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { Product, ProductDeal, Deal } = require('../models/models');
const random = require('./randomize')

const productDealGenerate = async () => {
    
    const productsCount = await Product.count()
    const dealsCount = await Deal.count()

    for (let i = 1; i <= dealsCount; i++) {

        const bool = random.randomize(0, 1);
        const countIteration = random.randomize(0, 4)

        if (bool) {
            //Подсчет количства продуктов, которые добавятся в сделку
            for (let j = 1; j <= productsCount; j++) {
                let isInDeal = random.randomize(1, 10);
                if (isInDeal < 2) {

                    const product = await Product.findByPk(j)
                    const deal = await Deal.findByPk(i)

                    const amount = random.randomize(1,6)
                    await ProductDeal.create({
                        productId: product.id,
                        dealId: deal.id,
                        amount: amount,
                        total: amount * product.price
                    })

                    
                }
            }
        }
    }
}

module.exports = productDealGenerate