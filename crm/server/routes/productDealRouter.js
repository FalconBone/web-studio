const Router = require('express')
const productDealController = require('../controlers/productDealController')

const router = new Router()

router.post('/getProductsByDealId', productDealController.getProductsByDealId)


module.exports = router