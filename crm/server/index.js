require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

//Последний middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({force: true})
        app.listen(PORT, () => console.log(`Server start in port ${PORT}`))
    } catch(e){
        console.log('ОШИБКА!!\n\n');
        console.log(e);
    }
}


start()
