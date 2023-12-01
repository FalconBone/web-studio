const { DealStatus } = require('../models/models');

const dealStatusGenerate = async () => {
    await DealStatus.create({name: "Новая"})
    await DealStatus.create({name: "Расчет стоимости"})
    await DealStatus.create({name: "Согласование"})
    await DealStatus.create({name: "Оплата"})
    await DealStatus.create({name: "Отгрузка"})
    await DealStatus.create({name: "Закрыта"})
}

module.exports = dealStatusGenerate