const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const { users } = require('../models/index'); //incluyo users model

// module.exports 

const middlewareBearer= (req, res, next) => {
    //console.log(req.headers);

    // Comprobar que existe el token
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" });
    } else {

        // Comrpobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
            } else {
                
                user.findByPk(decoded.user.id, { include: "roles" }).then(users => {
                    //console.log(user.roles);
                    req.users = user;
                    next();
                });
            }

        })
    }

};

module.exports = {middlewareBearer}