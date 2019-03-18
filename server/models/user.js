
const bcrypt = require('../helpers/bcrypt')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

let userSchema = new Schema({
    username: String,
    email: String,
    password: String
})

userSchema.pre('save', function(next) {
    console.log('hooks is here ===========')
    this.password = bcrypt.encrypt(this.password)
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User