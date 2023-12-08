const { TimeType } = require("../models/models")

class timeTypeController {
    async get(req, res) {
        const timeTypes = await TimeType.findAll()

        res.send(timeTypes)
    }
 }
 
 module.exports = new timeTypeController() 