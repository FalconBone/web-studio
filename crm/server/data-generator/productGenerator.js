const {fakerRU, faker} = require('@faker-js/faker/locale/ru');
const { Product } = require('../models/models');
const random = require('./randomize')

const productGenerate = async (amount) => {
    
    for (let i = 0; i < amount; i++) {
        let product = {
            name: faker.commerce.productName(),
            price: random.randomize(400, 5000)
        }

        await Product.create(product)
    }
}

module.exports = productGenerate