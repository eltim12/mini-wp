const bcrypt = require('bcryptjs')
const env = require('dotenv')
env.config()

module.exports = {
    encrypt: function (plainPassword) {
        let saltRound = Number(process.env.BCRYPT_SALT_ROUNDS)
        var salt = bcrypt.genSaltSync(saltRound)
        var hash = bcrypt.hashSync(plainPassword, salt)
        return hash
    },

    compare: function (input, password) {
        return bcrypt.compareSync(input, password)
    }
}