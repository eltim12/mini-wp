const Article = require("../models/article");

module.exports = {
    findAll(req, res) {
        Article.find({})
            .populate("userId")
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                console.log("=======ERROR=======");
                res.status(404).json({
                    msg: err.message
                });
            });
    },

    findOne(req, res) {
        Article.findById(req.query.id)
            .then(foundArticle => {
                res.status(200).json(foundArticle);
            })
            .catch(err => {
                console.log(err);
                console.log("=======ERROR=======");
                res.status(404).json({
                    msg: err.message
                });
            });
    },

    createArticle(req, res) {
        // console.log(req.body)   
        console.log(req.file, 'creating article===from controller');
        Article.create({
            title: req.body.title,
            content: req.body.content,
            created_at: new Date()
                .toISOString()
                .toString()
                .slice(0, 10),
            url: req.file.cloudStoragePublicUrl,
            userId: req.body.userId
        })
            .then(newArticle => {
                console.log(newArticle.url);
                res.status(200).json(newArticle);
            })
            .catch(err => {
                console.log("=======ERROR=======");
                res.status(404).json({
                    msg: err.message
                });
            });
    },

    updateArticle(req, res) {
        console.log("updating article.....");
        console.log(req.body, '=========================')
        Article
            .findOneAndUpdate({ _id: req.query.id }, {
                title: req.body.title,
                content: req.body.content,
            })
            .then(updatedArticle => {
                res.status(201).json(updatedArticle);
            })
            .catch(err => {
                console.log("=======ERROR=======");
                res.status(404).json({
                    msg: err.message
                });
            });
    },

    deleteArticle(req, res) {
        console.log(req.query, '===================')
        Article.findByIdAndDelete(req.query.id)
            .then(deleted => {
                res.status(200).json(deleted);
            })
            .catch(err => {
                console.log("=======ERROR=======");
                res.status(404).json({
                    msg: err.message
                });
            });
    }
};
