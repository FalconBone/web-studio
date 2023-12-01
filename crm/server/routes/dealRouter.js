const Router = require('express')
const router = new Router()
const dealController = require('../controlers/dealController')

router.post('/get', dealController.get)

module.exports = router