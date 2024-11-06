const express = require('express');
const router = express.Router();

const proyectoController = require('../controllers/proyecto.controller.js');


//Proyectos
router.post('/proyectos', proyectoController.create);
router.get('/proyectos', proyectoController.retrieveAllProyectos);
router.get('/proyectos/:id', proyectoController.getProyectoById);
router.put('/proyectos/:id', proyectoController.updateById);
router.delete('/proyectos/:id', proyectoController.deleteById);

module.exports = router;
