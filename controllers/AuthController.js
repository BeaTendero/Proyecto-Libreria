const { users } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const { log } = require('winston');

const AuthController = {}; //Create the object controller

//-------------------------------------------------------------------------------------
//Login users with database
//get user
AuthController.signIn = (req, res) =>{
        let { email, password } = req.body;
        // Buscar usuario
        users.findOne({ where: { email: email }
        }).then(users => {
            if (!users) {
                res.status(404).json({ msg: "Usuario con este correo no encontrado" });
            } else {
                if (bcrypt.compareSync(password, users.password)) {
                    // Creamos el token
                    let token = jwt.sign({ users: users }, authConfig.secret);

                    res.json({
                        users: users,
                        token: token
                    })
                } else {
                    // Unauthorized Access
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    };


//-------------------------------------------------------------------------------------
//REGISTER new users in database
//create user
AuthController.signUp = (req, res)=> {

        // Encriptamos la contraseña
        const passwordCrypted = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
        // console.log('--------------------------------------');
        console.log(passwordCrypted);
        // console.log('--------------------------------------');

        // Crear un usuario
        users.create({
            name: req.body.name,
            email: req.body.email,
            password: passwordCrypted
        }).then(users => {

            // Creamos el token
            let token = jwt.sign({user: users}, authConfig.secret);

            res.json({
                users: users,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err.message);
        });
    };

module.exports = AuthController;

