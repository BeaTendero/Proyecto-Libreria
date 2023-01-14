const db = require("../models");
const prestamos = db.prestamos;

const PrestamosControllers = {};

PrestamosControllers.createPrestamos = async (req, res) => {
    
    try {
        let data = req.body;

    let resp = await prestamos.create({
        fechaprestamo: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        userId: data.id_user,
        librosId: data.id_libros
    })
    res.status(200).json({
        resp,
        user: data.id_user,
        message: "Done"
    })

    } catch (error) {
        res.json({message: "Error"})
    }
    
    
}

module.exports = PrestamosControllers;