const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//Procesar el registro
router.post('/register', userController.processRegister);

// formulario de login
router.get('/login', userController.login);

//perfil de usuario
router.get('/profile/:userId', userController.profile);

module.exports = router;
