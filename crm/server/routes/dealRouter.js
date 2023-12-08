const Router = require('express')
const router = new Router()
const dealController = require('../controlers/dealController')

router.post('/get', dealController.get)
router.post('/getById', dealController.getById)

module.exports = router