const Router = require('express')
const workerController = require('../controlers/workerController')

const router = new Router()

router.post('/registration', workerController.registration)
router.post('/login', workerController.login)
router.get('/auth', workerController.check)

module.exports = router