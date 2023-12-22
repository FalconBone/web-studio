const { Position } = require("../models/models")

class PositionController {
    async getAll(req, res) {
        const positions = await Position.findAll()
        return res.json(positions)
    }

    async getById(req, res) {
        const id = req.body.id

        const position = await Position.findByPk(id)

        res.send(position)
    }
 }
 
 module.exports = new PositionController() 