const Router = require('express')
const productController = require('../controlers/productController')

const router = new Router()

router.post('/create', productController.create)
router.get('/getAll', productController.getAll)
router.post('/getById', productController.getById)


module.exports = router