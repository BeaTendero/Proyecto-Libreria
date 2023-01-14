const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views

const UserRouter = require('./views/UsersRouter');
const LibrosRouter = require('./views/LibrosRouter');
const PrestamosRouter = require('./views/PrestamosRouter');
const CategoryRouter = require ('./views/CategoryRouter')

//Rutas
router.use('/api', UserRouter); //Login and register routes
router.use('/Libros', LibrosRouter); //add auth
router.use('/categories',CategoryRouter);
router.use('/prestamos', PrestamosRouter)

module.exports = router;