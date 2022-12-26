//Importo funciones
const express = require('express');
const router = express.Router();
const {middlewareBearer} = require('../middlewares/auth.js');

//Importo modelo de datos
const Controller = require('../controllers/LibrosController');

// End-points CRUD movies
router.get('/', LibrosController.getAll);
router.get('/:id', LibrosController.getById);
router.get('/name/:title', LibrosController.getByTitle);
router.post('/',middlewareBearer,  LibrosController.create);
router.put('/:id',middlewareBearer, LibrosController.update);
router.delete('/', middlewareBearer , LibrosController.deleteAll);
router.delete('/:id', middlewareBearer, LibrosController.delete);





module.exports = router;