const express = require('express');
const router = express.Router();
const ArticuloController = require('../controllers/ArticuloController');
const AuthController = require('../controllers/AuthController');

// Aplicar middleware de autenticación a todas las rutas
router.use(AuthController.requireAuth);

// Rutas CRUD para artículos
router.get('/', ArticuloController.index);
router.get('/create', ArticuloController.create);
router.post('/store', ArticuloController.store);
router.get('/:id', ArticuloController.show);
router.get('/:id/edit', ArticuloController.edit);
router.post('/:id/update', ArticuloController.update);
router.post('/:id/delete', ArticuloController.destroy);

module.exports = router;
