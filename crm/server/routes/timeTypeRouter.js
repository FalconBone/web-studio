const Router = require('express')
const timeTypesController = require('../controlers/timeTypeController')

const router = new Router()

router.get('/get', timeTypesController.get)

module.exports = router