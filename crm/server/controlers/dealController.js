const { Deal, Client } = require('../models/models')
const { Op } = require("sequelize");

class DealController {
    async create(req, res, next) {
        const dealInfo = req.body

        await Deal.create({
            name: dealInfo.info,
        })
    }

    async get(req, res, next) {

        //name, clientName, statuses[], firstDate, secondDate
        const settings = req.body.settings
        //id, name, client, budjet, manager, date
        const sort = req.body.sort

        //превращаем настройки в объект where
        const whereSettings = {}

        const startTimer = new Date()
        //name
        whereSettings['name'] = {
            [Op.substring]: settings['name']
        }
        console.log('\n');
        //clientId
        const clients = await Client.findAll({
            logging: console.log,
            attributes: ['id'],
            where: {
                name: {
                    [Op.substring]: settings['clientName']
                }

            }
        })
        const clientsId = []

        clients.forEach(element => {
            clientsId.push(element.dataValues.id)
        });

        whereSettings['clientId'] = {
            [Op.or]: clientsId
        }


        //dealStatusId
        whereSettings['dealStatusId'] = {
            [Op.or]: settings['statuses']
        }

        //creatingDate
        whereSettings['creatingDate'] = {
            [Op.between]: [settings['firstDate'], settings['secondDate']]
        }


        /*
            1) Делаем на фронте запрос и кидаем сначала все deals
            2) Делаем настройки на фронте и кидаем в зависимости от них deals
            3) Делаем сортировку
            4) Проверяем время работы запросов на сервере без индексации
            5) Делаем индексацию
            6) Проверяем время работы запросов на сервере с индексацией
        */
        const deals = await Deal.findAll(
            {   
                logging: console.log,
                where: whereSettings
            }
        )
        console.log('\n');
        const endTimer = new Date()
        console.log(endTimer.getMilliseconds() - startTimer.getMilliseconds());
        res.json(deals)
    }

    async getOne(req, res, next) {

    }
}

module.exports = new DealController()