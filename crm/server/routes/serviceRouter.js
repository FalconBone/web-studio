const Router = require('express')
const serviceController = require('../controlers/serviceController')

const router = new Router()

router.post('/getServicesByDealId', serviceController.getServicesByDealId)


module.exports = router