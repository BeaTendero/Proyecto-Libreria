const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views

const UsersRouter = require('./views/UsersRouter');
const LibrosRouter = require('./views/LibrosRouter');
const PrestamosRouter = require('./views/PrestamosRouter');

//Rutas
router.use('/api', UsersRouter); //Login and register routes
router.use('/movies', LibrosRouter); //add auth
router.use('/categories',CategoryRouter);
router.use('/prestamos', PrestamosRouter)

module.exports = router;