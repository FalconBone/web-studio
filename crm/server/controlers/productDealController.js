const {ProductDeal} = require('../models/models')

class productDealController {
    async create(req, res) {
 
    }
 
    async getAll(req, res) {
        
    }
    async getProductsByDealId(req, res) {
        const id = req.body.id

        const productsId = await ProductDeal.findAll({where: {
            dealId: id
        }})
        
        const productsArray = productsId.map(product => product.dataValues)

        res.send(productsArray)
    }
 }
 
 module.exports = new productDealController() 