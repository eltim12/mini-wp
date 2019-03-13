const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/mini-wp', { useNewUrlParser: true })

let articleSchema = new Schema ({
    title: String,
    content: String,
    created_at: String,
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article 