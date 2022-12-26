//Importo modelo de datos
const db = require("../models");
const libros = db.libros;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var categoryModel  = require('../models').category;  //Add for dependency response

const LibrosController = {}; //Create the object controller



//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all libros database
LibrosController.getAll = (req, res) => { //funciones propias de sequelize
    
  /// peticiones asincronas
    libros.findAll({include: [{ model:categoryModel}]})
      .then(data => {
        res.send(data);
      })
      //en caso de que se produzca un error saltará el error 500
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar libros."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET libros by Id from database
LibrosController.getById = (req, res) => {
    const id = req.params.id;

    libros.findByPk(id, {include: [{ model:categoryModel}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se puede encontrar el libro id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al recuperar películas con id=" + id
        });
      });
  };



//-------------------------------------------------------------------------------------
//CREATE un nuevo libro en database
LibrosController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "¡El contenido no puede estar vacío!"
      });
      return;
    }
  
    // Crea libros
    const newLibros = {
      title: req.body.title,
      categoryId: req.body.categoryId
    };
  
    // Guardar libros en la DB
    libros.create(newLibros)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al crear el libro."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a libros from database
LibrosController.update = (req, res) => {
    const id = req.params.id;
  
    libros.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "El libro se actualizó correctamente."
          });
        } else {
          res.send({
            message: `No se puede actualizar el libro con id=${id}. ¡Tal vez no se encontró el libro o req.body está vacío!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al actualizar el libro con id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET libro by Titulo  database 
//FindByTitle
  LibrosController.getByTitle = (req, res) => {
    libros.findAll({ where: { title: req.params.title } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar los tutoriales."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE libro  Id from database
LibrosController.delete = (req, res) => {
    const id = req.params.id;
  
    libros.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "¡La película se eliminó con éxito!"
          });
        } else {
          res.send({
            message: ` No se puede eliminar la película con id=${id}. ¡Quizás no se encontró la película!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo eliminar la película con id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE libros from database
//delete all libros
  LibrosController.deleteAll = (req, res) => {
    libros.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Las películas se eliminaron con éxito!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al eliminar todas las películas."
        });
      });
  };

module.exports = LibrosController;