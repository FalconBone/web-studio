const { Application } = require("../models/models")


class ApplicationController {
    async getApplications(req, res) {

        const applications = await Application.findAll()

        res.send(applications)
    }
}

module.exports = new ApplicationController()