const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Mostrar formulario de login
router.get('/login', AuthController.showLogin);

// Procesar login
router.post('/login', AuthController.login);

// Logout
router.get('/logout', AuthController.logout);

module.exports = router;
