const Router = require('express')
const applicationController = require('../controlers/applicationController')

const router = new Router()

router.get('/getApplications', applicationController.getApplications)

module.exports = router