const { Client } = require("../models/models")

class ClientController {
   async create(req, res) {

   }

   async find(req, res) {

   }

   async getAll(req, res) {
      const clients = await Client.findAll()

      res.send(clients)
   }
}

module.exports = new ClientController() 