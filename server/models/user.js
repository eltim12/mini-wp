const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('../helpers/bcrypt')

mongoose.connect('mongodb://localhost/mini-wp', { useNewUrlParser: true }) //promsie


let userSchema = new Schema({
    username: String,
    email: String,
    password: String
})

userSchema.pre('save', function(next) {
    this.password = bcrypt.encrypt(this.password)
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User