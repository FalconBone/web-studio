const Router = require('express')
const dealDocumentController = require('../controlers/dealDocumentController')
const router = new Router()

router.post('/create', dealDocumentController.create)
router.get('/')

module.exports = router