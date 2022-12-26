const express = require ('express')
const router = express.Router()

const UserRoutes = require ('./views/UserRoutes')
const ProfileRoutes = require ('./views/ProfileRoutes')

router.use('/user', UserRoutes)
router.use('/profile', ProfileRoutes)

module.exports = router 