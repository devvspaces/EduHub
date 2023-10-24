const router = require('express').Router();
const auth = require('./auth.routes')
const user = require('./user.routes')
const admin = require('./admin.routes')


router.use('/auth', auth)
router.use('/admin', admin)
router.use('/users', user)

module.exports = router;