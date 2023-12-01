const { WorkerStatus } = require('../models/models');

const workerStatusGenerate = async () => {
    await WorkerStatus.create({status: "Работает"})
    await WorkerStatus.create({status: "На больничном"})
    await WorkerStatus.create({status: "В отпуске"})
}

module.exports = workerStatusGenerate