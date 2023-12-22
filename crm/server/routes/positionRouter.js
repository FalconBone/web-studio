const Router = require('express')
const positionController = require('../controlers/positionController')

const router = new Router()

router.get('/getAll', positionController.getAll)
router.post('/getById', positionController.getById)


module.exports = router