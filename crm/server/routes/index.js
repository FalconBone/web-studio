const Router = require('express')
const router = new Router()
const clientRouter = require('./clientRouter')
const dealRouter = require('./dealRouter')
const workerRouter = require('./workerRouter')
const clientContactRouter = require('./clientContactRouter')
const productRouter = require('./productRouter')
const dealDocumentRouter = require('./dealDocumentRouter')


router.use('/deal', dealRouter)
router.use('/client', clientRouter)
router.use('/clientContact', clientContactRouter)
router.use('/worker', workerRouter)
router.use('/product', productRouter)
router.use('/dealDocument', dealDocumentRouter)

module.exports = router