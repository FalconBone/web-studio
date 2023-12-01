const { TimeType } = require('../models/models');

const timeTypeGenerate = async () => {
    await TimeType.create({name: "Час"})
    await TimeType.create({name: "День"})
    await TimeType.create({name: "Неделя"})
}

module.exports = timeTypeGenerate