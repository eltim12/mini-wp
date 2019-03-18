const router = require('express').Router()
const articleController = require('../controllers/articleController')
const images = require('../helpers/images');

//get one article data
router.get('/one', articleController.findOne)

//get all article data
router.get('/', articleController.findAll)

//create a new article
router.post('/', 
    images.multer.single('image'),
    images.sendUploadToGCS,
    articleController.createArticle)

// update an article
router.put('/', articleController.updateArticle)

//delete an article
router.delete('/', articleController.deleteArticle)

module.exports = router
