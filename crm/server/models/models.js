const sequelize = require('../db')
const {DataTypes} = require('sequelize')

//-----------------------------SALE BLOCK--------------------------------//

//Сделка между клиентом и веб студией
const Deal = sequelize.define('deal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    creatingDate: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
    term: {type: DataTypes.INTEGER, allowNull: true},
    budget: {type: DataTypes.INTEGER, allowNull: true},
}
// ,{
//     indexes: [
//         {
//             fields: ['name']
//         },
//         {
//             fields: ['creatingDate']
//         }
//     ]
// }
)

//Клиент - организация
const Client = sequelize.define('client', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(100), allowNull: false}
}
// ,{
//     indexes: [
//         {
//             fields: ['name']
//         },
//     ]
// }
)

//Форма клиента - бриф на заказ сайта
const ClientForm = sequelize.define('client_form', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.TEXT, allowNull: true} 
})

//Контакты организации
const ClientContact = sequelize.define('client_contact', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type: DataTypes.STRING(100), allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
    position: {type: DataTypes.STRING(50), allowNull: true}
})

//Почта и телефон клиента
const ClientEmail = sequelize.define('client_email', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: false, allowNull: false}
})

const ClientPhone = sequelize.define('client_phone', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: DataTypes.STRING(20), unique: false, allowNull: false}
})

//Задачи менеджера
const TaskSale = sequelize.define('task_sale', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(100), allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true},
    date: {type: DataTypes.DATE, allowNull: false}
})

//Тип времени: день, неделя, час
const TimeType = sequelize.define('time_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(6), allowNull: false},
})

//Статус сделки: в процессе, завершена
const DealStatus = sequelize.define('deal_status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(16), allowNull: false},
})

//Список товаров, представляемых студией (цифровых - по типу подписки на сервисы)
const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(100), allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
})

//Список товаров в сделке
const ProductDeal = sequelize.define('product_deal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1},
    comment: {type: DataTypes.STRING(100)},
    total: {type: DataTypes.INTEGER, allowNull: false}
})

//Услуга - почасовая оплата работника. Будет список должностей, участвующих в работе на проектом сделки
const Service = sequelize.define('service', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    start_period: {type: DataTypes.INTEGER, allowNull: false},
    end_period: {type: DataTypes.INTEGER, allowNull: false},
    amount: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1},
    total: {type: DataTypes.INTEGER, allowNull: false}
})

//Список товаров, представляемых студией (цифровых - по типу подписки на сервисы)
const DealDocument= sequelize.define('deal_document', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    file: {type: DataTypes.STRING, allowNull: false}
})

//Список товаров, представляемых студией (цифровых - по типу подписки на сервисы)
const DealBill= sequelize.define('deal_bill', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    file: {type: DataTypes.STRING, allowNull: false}
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type: DataTypes.STRING, allowNull: false},
    login: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false}
})

const Application = sequelize.define('application', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},  
    full_name: {type: DataTypes.STRING(100), allowNull: false},
    phone: {type: DataTypes.STRING(20), allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.TEXT, allowNull: false}
})
//-----------------------------DEVELOPMENT BLOCK--------------------------------//

//Список должностей сотрудников
const Position = sequelize.define('position', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    hour_salary: {type: DataTypes.INTEGER, allowNull: false}
})

//Список работников
const Worker = sequelize.define('worker', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type: DataTypes.STRING(100), allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    phone: {type: DataTypes.STRING(20), unique: true, allowNull: false},
    passport: {type: DataTypes.STRING(20), unique: true, allowNull: false},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
})

//Список проектов. 1 проект - 1 сделка
const Project = sequelize.define('project', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(100), allowNull: false},
    responcible_worker_id: {type: DataTypes.INTEGER, allowNull: false},
    start_date: {type: DataTypes.DATE, allowNull: false},
    end_date: {type: DataTypes.DATE, allowNull: true}
})

// const CrmRole = sequelize.define('crm_role', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     role: {type: DataTypes.STRING(20), allowNull: false},
// })

const WorkerStatus = sequelize.define('worker_status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING(20), allowNull: false},
})

const ProjectTask = sequelize.define('project_task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(100), allowNull: false},     
})

const ProjectWorker = sequelize.define('project_worker', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},   
})

Client.hasMany(Deal)
Deal.belongsTo(Client)

Client.hasMany(ClientContact)
ClientContact.belongsTo(Client)

ClientContact.hasMany(ClientEmail)
ClientEmail.belongsTo(ClientContact)

ClientContact.hasMany(ClientPhone)
ClientPhone.belongsTo(ClientContact)

ClientForm.hasOne(Deal)
Deal.belongsTo(ClientForm)

Client.hasMany(ClientForm)
ClientForm.belongsTo(Client)

Deal.hasMany(TaskSale)
TaskSale.belongsTo(Deal)

TimeType.hasMany(Deal)
Deal.belongsTo(TimeType)

DealStatus.hasMany(Deal)
Deal.belongsTo(DealStatus)

Product.belongsToMany(Deal, {through: ProductDeal})
Deal.belongsToMany(Product, {through: ProductDeal})

Deal.belongsToMany(Position, {through: Service})
Position.belongsToMany(Deal,  {through: Service})

Deal.hasMany(DealDocument)
DealDocument.belongsTo(Deal)

Deal.hasMany(DealBill)
DealBill.belongsTo(Deal)

Position.hasMany(Worker)
Worker.belongsTo(Position)

User.hasMany(Deal)
Deal.belongsTo(User)
// CrmRole.hasMany(Worker)
// Worker.belongsTo(CrmRole)

WorkerStatus.hasMany(Worker)
Worker.belongsTo(WorkerStatus)

Worker.belongsToMany(Project, {through: ProjectWorker})
Project.belongsToMany(Worker, {through: ProjectWorker})

Deal.hasOne(Project)
Project.belongsTo(Deal)


module.exports = {
    Deal,
    Client,
    ClientContact,
    ClientForm,
    ClientEmail,
    ClientPhone,
    DealStatus,
    TimeType,
    TaskSale,
    Product,
    ProductDeal,
    Position,
    Service,
    Worker,
    ProjectWorker,
    Project,
    Application,
//    CrmRole,
    WorkerStatus,
    DealDocument,
    DealBill,
    User
}