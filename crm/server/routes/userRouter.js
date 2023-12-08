const Router = require('express')
const userController = require('../controlers/userController')

const router = new Router()

router.get('/getUsers', userController.getUsers)

module.exports = router