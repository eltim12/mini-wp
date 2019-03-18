const mongoose = require('mongoose')


const Schema = mongoose.Schema

let articleSchema = new Schema ({
    title: String,
    content: String,
    url: String,
    created_at: String,
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article 