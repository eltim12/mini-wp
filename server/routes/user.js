const router = require('express').Router()
const userController = require('../controllers/userController')

//get all users data
router.get('/', userController.findAll)

//get one user data find by user id
router.get('/find', userController.findOne)

//update user
router.put('/edit', userController.editProfile)

//register new user
router.post('/register', userController.register)

//login a user
router.post('/login', userController.login)

module.exports = router