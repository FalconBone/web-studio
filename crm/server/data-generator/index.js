const { Client } = require("../models/models");
const applicationGenerate = require("./applicationGenerator");
const clientContactGenerate = require("./clientContactGenerator");
const clientEmailGenerate = require("./clientEmailGenerator");
const clientFormGenerate = require("./clientFormGenerator");
const clientGenerate = require("./clientGenerator");
const clientPhoneGenerate = require("./clientPhoneGenerator");
const dealGenerate = require("./dealGenerator");
const dealStatusGenerate = require("./dealStatusGenerator");
const positionGenerate = require("./positionGenerate");
const productDealGenerate = require("./productDealGenerator");
const productGenerate = require("./productGenerator");
const projectGenerator = require("./projectGenerator");
const projectWorkerGenerate = require("./projectWorkerGenerator");
const serviceGenerate = require("./serviceGenerator");
const timeTypeGenerate = require("./timeTypeGenerator");
const userGenerate = require("./userGenerator");
const workerGenerator = require("./workerGenerator");
const workerStatusGenerate = require("./workerStatusGenerator");


let dataGenerator = {
    generateTestData: async function(amount){
       await applicationGenerate(10)
        await clientGenerate(amount)
        await clientContactGenerate(amount*3)
        await clientPhoneGenerate(amount*5)
        await clientEmailGenerate(amount*5)
        await userGenerate()
         await clientFormGenerate(Math.floor(amount*1.5))
         await dealStatusGenerate()
         await timeTypeGenerate()
         await dealGenerate()
        await productGenerate(amount)
        await productDealGenerate()
        await positionGenerate()
        await serviceGenerate()
        await workerStatusGenerate()
        await workerGenerator(amount)
        await projectGenerator()
        await projectWorkerGenerate()
    }
}

module.exports = dataGenerator