const express = require('express');
const PrestamosControllers = require ('../controllers/PrestamosController');
const router = express.Router();
const {middlewareBearer} = require('../middlewares/auth');

router.post('/create',middlewareBearer, PrestamosControllers.createPrestamos);

module.exports = router; 