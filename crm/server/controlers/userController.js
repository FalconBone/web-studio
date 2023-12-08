const {User} = require('../models/models')

class UserController {

    async getUsers(req, res) {
        const users = await User.findAll({attributes: ['id', 'full_name']})

        res.send(users)
    }
}

module.exports = new UserController()