const express = require('express');
const router = express.Router();
const {middlewareBearer} = require('../middlewares/auth');


const PrestamosControllers = require('../controllers/PrestamosControllers')

router.post('/create',middlewareBearer, PrestamosControllers.createLibros);

module.exports = router; 