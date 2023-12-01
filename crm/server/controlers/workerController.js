


const ApiError = require('../error/ApiError')
class WorkerController {
    async login(req, res) {

    }

    async registration(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json({id: id})
    }
}

module.exports = new WorkerController()