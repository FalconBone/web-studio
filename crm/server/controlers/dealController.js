const { Deal, Client } = require('../models/models')
const { Op, Transaction } = require("sequelize");
const {Sequelize} = require('sequelize')
//const sequelize = require('sequelize');
const sequelize = require('../db')

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

        console.log(req.body.settings);
        //превращаем настройки в объект where
        const whereSettings = {}

        const startTimer = new Date()
        //name
        if (settings['name']) {
            whereSettings['name'] = {
                [Op.substring]: settings['name']
            }
        }

        console.log('\n');
        //clientId

        let clients
        console.log(settings['clientName']);
        if (settings['clientName']) {
            clients = await Client.findAll({
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

        if (clientsId.length === 0) {
            clientsId.push(-1)
        }

        whereSettings['clientId'] = {
            [Op.or]: clientsId
        }
    }

    if (settings['statuses']) {
        whereSettings['dealStatusId'] = settings['statuses']
    }
        //dealStatusId
        

        //creatingDate
        if (settings['secondDate'] && settings['firstDate']) {
            whereSettings['creatingDate'] = {
                [Op.between]: [settings['firstDate'], settings['secondDate']]
            }
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

    async getById(req, res, next) {
        const id = req.body.id

        const deal = await Deal.findByPk(id)

        res.send(deal)
    }

    async updateDeal(req, res) {
        const id = req.body.id
        const updatedDeal = req.body.deal

        console.log('Новые значения: ', updatedDeal);
        await Deal.update({...updatedDeal}, {where: {id: id}})

        const deal = await Deal.findByPk(id)
        console.log('Новая сделка: ', deal);

        res.send(deal.dataValues)
    }
    async deleteDeal(req, res) {
        const id = req.body.id

        await Deal.destroy({where: {id: id}})

        res.send(200)
    }



    //distinct
    //Найдем все id уникальных клиентов
    async distinct(req, res) {

        let clients
        const startTimer = new Date()

        await Deal.findAll({
            attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('clientId')), 'clients']]
          }).then(data => {
            const endTimer = new Date()
            clients = data
            console.log(`Время поиска: ${endTimer.getMilliseconds() - startTimer.getMilliseconds()}`);
            res.send(clients)
          })
    }

    //order by
    //Отсортированный список по бюджету
    async orderBy(req, res) {
        const startTimer = new Date()
        await Deal.findAll({
            order: [[Sequelize.col('budget'), 'DESC']],
            attributes: ['budget']
        }).then(data => {
            const endTimer = new Date()
            console.log(`Время поиска: ${endTimer.getMilliseconds() - startTimer.getMilliseconds()}`);
            res.send(data)
        })
    }

    //between
    //найти все сделки, заключенные между 2018-02-19 и 2023-02-19
    async between(req, res) {
        const startTimer = new Date()
        await Deal.findAll({
            where: {
                creatingDate: {
                    [Op.between] : ['2018-02-19 10:31:02.848+03', '2023-02-19 10:31:02.848+03']
                }
            }
        }).then(data => {
            const endTimer = new Date()
            console.log(`Время поиска: ${endTimer.getMilliseconds() - startTimer.getMilliseconds()}`);
            res.send(data)
        })
    }

    //in
    //Найти все сделки, у которых количество дней входит в промежуток от 8 до 12
    async in(req, res) {
        const startTimer = new Date()
        await Deal.findAll({
            where: {
                term: {
                    [Op.in] : [8, 12]
                }
            }
        }).then(data => {
            const endTimer = new Date()
            console.log(`Время поиска: ${endTimer.getMilliseconds() - startTimer.getMilliseconds()}`);
            res.send(data)
        })
    }

    //агрегатные функции
    //Количество сделок, у которых статус равен 1
    async agregation(req, res) {
        const startTimer = new Date()
        await Deal.findAll({
            attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('dealStatusId')), 'statuses_1']
            ],
            where: {
                dealStatusId: 1
            }
        }).then(data => {
            const endTimer = new Date()
            console.log(`Время поиска: ${endTimer.getMilliseconds() - startTimer.getMilliseconds()}`);
            res.send(data)
        })
    }

    //having
    //Сделки у которых term = 12
    async having(req, res) {
        const startTimer = new Date()
        await Deal.findAll({
            group: 'id',
            having: {
                term: 12
            }
        }).then(data => {
            const endTimer = new Date()
            console.log(`Время поиска: ${endTimer.getMilliseconds() - startTimer.getMilliseconds()}`);
            res.send(data)
        })
    }

    //intersect
    async intersect(req, res) {
//         SELECT * FROM "deals"
//   WHERE "term" IN (6, 10)
// INTERSECT
// SELECT * FROM "deals"
//   WHERE "clientId" IN(15, 30)
    }

    //вложенные запросы - руками
    async vlojen(req, res) {
        // SELECT * FROM "deals", "clients" as "c"
        // WHERE "clientId" NOT IN (
        //     SELECT "id" FROM "clients" 
        //     WHERE "c"."name" LIKE 'ИП%'
        // )
    }

    //exists - руками
    async exists(req, res) {
        
    }

    async transactionsDirty(req, res) {

        const t1 = await sequelize.transaction({isolationLevel: Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED});
        const t2 = await sequelize.transaction({isolationLevel: Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED});
        let d

        try {
            await Deal.update({term: 100}, {where: {id: 1}, transaction: t1})

            d = await Deal.findAll({attributes: [[sequelize.fn('max', sequelize.col('term')), 'maxTerm']], transaction: t2})

            await t2.commit()
            await t1.rollback()
        } catch(e) {
            await t1.rollback()
        }

        res.send(d)
    }
}

module.exports = new DealController()