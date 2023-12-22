const {Service} = require('../models/models')

class ServiceController {
    async getServicesByDealId(req, res) {
        const id = req.body.id

        const positionsId = await Service.findAll({where: {
            dealId: id
        }})
        
        const positionsArray = positionsId.map(position => position.dataValues)

        res.send(positionsArray)
    }
 }
 
 module.exports = new ServiceController() 