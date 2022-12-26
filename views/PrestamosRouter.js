const express = require('express');
const router = express.Router();
const {middlewareBearer} = require('../middlewares/auth.js');


const LoansControllers = require('../controllers/LoansControllers')

router.post('/create',middlewareBearer, PrestamosControllers.createLoan);

module.exports = router; 