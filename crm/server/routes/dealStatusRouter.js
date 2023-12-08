const Router = require('express')
const router = new Router()
const dealStatusController = require('../controlers/dealStatusController')

router.get('/get', dealStatusController.get)

module.exports = router