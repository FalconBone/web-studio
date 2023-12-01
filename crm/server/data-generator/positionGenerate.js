const { Position } = require('../models/models');

const positionGenerate = async () => {
    await Position.create({name: "Менеджер проекта", hour_salary: 520})
    await Position.create({name: "Верстальщик", hour_salary: 400})
    await Position.create({name: "Программист", hour_salary: 490})
    await Position.create({name: "Контент-менеджер", hour_salary: 350})
    await Position.create({name: "Специалист по контекстной рекламе", hour_salary: 390})
    await Position.create({name: "SEO-специалист", hour_salary: 390})
    await Position.create({name: "Дизайнер", hour_salary: 390})
}

module.exports = positionGenerate