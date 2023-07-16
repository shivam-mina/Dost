const { SignUp, Login } = require('../controllers/AuthController')
const { verifyUser } = require('../middlewares/AuthMiddleware')
const router = require('express').Router()

router.post('/signup', SignUp)
router.post('/login', Login)
router.post('/', verifyUser)

module.exports = router
