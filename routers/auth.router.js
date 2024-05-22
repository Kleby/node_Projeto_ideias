const express = require('express');
const AuthController = require('../controllers/auth.controller');
const router = express.Router();

router.get('/login', AuthController.mostrarLogin);
router.get('/cadastro', AuthController.mostrarCadastro)

module.exports = router;