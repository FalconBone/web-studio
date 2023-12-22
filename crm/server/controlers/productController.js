const {Product} = require('../models/models')
class productController {
    async create(req, res) {
        const {name, price} = req.body;
        const product = await Product.create({name, price})
        return res.json(product)
    }
 
    async getAll(req, res) {
        const products = await Product.findAll()
        return res.json(products)
    }

    async getById(req, res) {
        const id = req.body.id

        const product = await Product.findByPk(id)

        res.send(product)
    }
 }
 
 module.exports = new productController() 