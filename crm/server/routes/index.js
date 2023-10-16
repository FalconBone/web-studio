const Router = require('express')
const router = new Router()
const clientRouter = require('./clientRouter')
const dealRouter = require('./dealRouter')
const workerRouter = require('./workerRouter')
const clientContactRouter = require('./clientContactRouter')


router.use('/deal', dealRouter)
router.use('/client', clientRouter)
router.use('/clientContact', clientContactRouter)
router.use('/worker', workerRouter)

module.exports = router