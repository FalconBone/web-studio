const Router = require('express')
const clientController = require('../controlers/clientController')

const router = new Router()

router.post('/', clientController.create)
router.get('/', clientController.getAll)
router.get('/:id', clientController.find)

module.exports = router