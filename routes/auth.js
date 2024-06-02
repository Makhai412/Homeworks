const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../Controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

// Ruta para registrar un nuevo usuario
router.post('/register', 
    [
        // Validaciones de los campos recibidos
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de al menos 6 caracteres').isLength({min: 6}),
        validarCampos // Middleware para validar los campos
    ],
    crearUsuario // Controlador para crear un nuevo usuario
);

// Ruta para iniciar sesión
router.post('/login', loginUsuario);

// Ruta para revalidar el token de autenticación
router.get('/renew', revalidarToken);

module.exports = router;