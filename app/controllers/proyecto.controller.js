const db = require('../config/db.config.js');
const Proyecto = db.Proyecto;

// Crear un nuevo proyecto
exports.create = async (req, res) => {
    try {
        const proyecto = {
            id_usuario: req.body.id_usuario,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fecha_creacion: req.body.fecha_creacion
        };

        const result = await Proyecto.create(proyecto);
        console.log("Proyecto creado:", result); // Verifica si llega aquí
        res.status(200).json({
            message: "Proyecto creado exitosamente",
            proyecto: result
        });
    } catch (error) {
        console.error("Error al crear proyecto:", error);
        res.status(500).json({
            message: "¡Fallo al crear el proyecto!",
            error: error.message
        });
    }
};


// Obtener todos los proyectos
exports.retrieveAllProyectos = async (req, res) => {
    try {
        const proyectoInfos = await Proyecto.findAll();
        res.status(200).json({
            message: "¡Proyectos obtenidos exitosamente!",
            proyectos: proyectoInfos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Error al obtener los proyectos!",
            error: error.message
        });
    }
};

// Obtener un proyecto por su ID
exports.getProyectoById = async (req, res) => {
    try {
        const proyectoId = req.params.id;
        const proyecto = await Proyecto.findByPk(proyectoId);

        if (!proyecto) {
            return res.status(404).json({
                message: "Proyecto no encontrado con id = " + proyectoId
            });
        }

        res.status(200).json({
            message: "Proyecto obtenido exitosamente",
            proyecto: proyecto
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Error al obtener proyecto con id!",
            error: error.message
        });
    }
};

// Actualizar un proyecto por su ID
exports.updateById = async (req, res) => {
    try {
        const proyectoId = req.params.id;
        const proyecto = await Proyecto.findByPk(proyectoId);

        if (!proyecto) {
            return res.status(404).json({
                message: "No se encontró el Proyecto para actualizar con id = " + proyectoId
            });
        }

        const updatedObject = {
            id_usuario: req.body.id_usuario,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fecha_creacion: req.body.fecha_creacion
        };

        await Proyecto.update(updatedObject, { where: { id_proyecto: proyectoId } });

        const updatedProyecto = await Proyecto.findByPk(proyectoId);
        res.status(200).json({
            message: "Actualización exitosa del Proyecto",
            proyecto: updatedProyecto
        });
    } catch (error) {
        res.status(500).json({
            message: "No se puede actualizar un proyecto con id = " + req.params.id,
            error: error.message
        });
    }
};

// Eliminar un proyecto por su ID
exports.deleteById = async (req, res) => {
    try {
        const proyectoId = req.params.id;
        const proyecto = await Proyecto.findByPk(proyectoId);

        if (!proyecto) {
            return res.status(404).json({
                message: "No existe el proyecto con id = " + proyectoId
            });
        }

        await proyecto.destroy();
        res.status(200).json({
            message: "Eliminación exitosa del Proyecto",
            proyecto: proyecto
        });
    } catch (error) {
        res.status(500).json({
            message: "No se puede eliminar un proyecto con id = " + req.params.id,
            error: error.message
        });
    }
};
