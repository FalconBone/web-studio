require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')
const dataGenerator = require('./data-generator')
const uuid = require('uuid')
const { fileHandler, fileStat } = require('./fileHandler/fileHandler')
const cookieParser = require('cookie-parser')


const PORT = process.env.PORT

const app = express()

app.use(cors({
    origin: 'http://localhost:3000/',
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser('123'));
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.post('/file', (req, res) => {
    const file = req.files.file

    const type = file.name
        .split('.')
        .filter(Boolean)
        .slice(1)
        .join('.')

    if (file.mimetype !== 'application/octet-stream') {
        res.send('Неверный тип файла')
    } else if (((file.size / 1024) / 1024 < 10) || ((file.size / 1024) / 1024 > 20)) {
        res.send('Неверный размер файла')
    } else {
        const fileName = uuid.v4() + `.${type}`
        file.mv(path.resolve(__dirname, 'static', fileName))
    }

    res.send(200)
})

app.post('/createTxt', (req, res) => {
    fileHandler(req.body.deal)
        .then(async () => {
            const stat = await fileStat()
            res.send(stat)
        })
})

app.get('/getFileInfo', async (req, res) => {
    const stat = await fileStat()
    return stat
})

app.post('/cookie', (req, res) => {
    res.cookie('name', req.body.name, { maxAge: 999999, httpOnly: true, sameSite: 'none', secure: true});
    res.send(200)
})

app.get('/cookie', (req, res) => {
    // console.log(req.cookies);
   const name = req.cookies.name
    console.log(name);
    // res.send({name: req.cookies.name})
    res.send({name: name})
})


//Последний middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server start in port ${PORT}`))
        //dataGenerator.generateTestData(20)
    } catch(e){
        console.log('\n\nОШИБКА!!\n\n');
        console.log(e);
    }
}


start()
