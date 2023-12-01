const uuid = require('uuid')
const path = require('path')
const {DealDocument} = require('../models/models')
const ApiError = require('../error/ApiError')

class DealDocumentController {
   async create(req, res, next) {
      try {
         const {name} = req.body
         const {file} = req.files
         let fileName = uuid.v4() + ".txt"
         file.mv(path.resolve(__dirname, '..', 'static', fileName))

         const dealDocument = await DealDocument.create({name: name, file: fileName})
         
         return res.json(dealDocument)
      } catch (e) {
         console.log('Ошибка в create');
         next(ApiError.badRequest(e.message))
      }
   }

   async find(req, res) {

   }

   async getAll(req, res) {

   }
}

module.exports = new DealDocumentController() 