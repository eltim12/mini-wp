const router = require('express').Router()
const articleController = require('../controllers/articleController')

//get all article data
router.get('/', articleController.findAll)

//create a new article
router.post('/', articleController.createArticle)

// update an article
router.put('/', articleController.updateArticle)

//delete an article
router.delete('/', articleController.deleteArticle)

module.exports = router
