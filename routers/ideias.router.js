const express = require('express');
const router = express.Router();
const IdeiaController = require('../controllers/ideia.controller');

router.get('/', IdeiaController.mostrarTodasAsIdeias);

module.exports = router;