const Article = require('../models/article')

module.exports = {
    findAll(req, res) {
        Article
            .find({})
            .populate('userId')
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                console.log("=======ERROR=======")
                res.status(404).json({
                    msg: err.message
                })
            })
    },

    createArticle(req, res) {
        Article
            .create({
                title: req.body.title,
                content: req.body.content,
                created_at: new Date().toISOString().toString().slice(0, 10),
                userId: req.body.userId
            })
            .then(newArticle => {
                res.status(200).json(newArticle)
            })
            .catch(err => {
                console.log("=======ERROR=======")
                res.status(404).json({
                    msg: err.message
                })
            })
    },

    updateArticle(req, res) {
        Article
            .findOneAndUpdate(req.query.id, req.body)
            .then(updatedArticle => {
                res.status(201).json(updatedArticle)
            })
            .catch(err => {
                console.log("=======ERROR=======")
                res.status(404).json({
                    msg: err.message
                })
            })
    },

    deleteArticle(req, res) {
        Article
            .findOneAndDelete(req.query.id)
            .then(deleted => {
                res.status(200).json(deleted)
            })
            .catch(err => {
                console.log("=======ERROR=======")
                res.status(404).json({
                    msg: err.message
                })
            })
    }

}