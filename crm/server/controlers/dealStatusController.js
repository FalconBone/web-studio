const { DealStatus } = require("../models/models")

class dealStatusController {
    async get(req, res) {
        const statuses = await DealStatus.findAll()

        res.send(statuses)
    }
 }
 
 module.exports = new dealStatusController() 