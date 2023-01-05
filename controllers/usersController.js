const User = require('../models/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../config/auth');

const UsersController = {};

UsersController.getAllUsers = async (req, res) => {

    try {
        let result = await User.find({});
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Usuario no encontrado" })
        }
    } catch (error) {
        console.log(error);
    }
};

UsersController.getUserById = async (req, res) => {
    let _id = req.params._id;
    let user = req.user.usuario[0];
    if (_id !== user._id) {

        res.send({ "Msg": "Acceso no autorizado" });
    } else {
        res.send({

            "id": user._id,
            "name": user.name,
            "rol": user.rol,

        });
    }
};

UsersController.getUsersByName = async (req, res) => {

    const name = req.body.name;

    try {
        const foundUsers = await User.find ({name: name})
        res.send(foundUsers)
    } catch (error) {
        console.log(error);
    }
};

UsersController.newUser = async (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));

    try {

        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: password,
            rol: req.body.rol,
        })

        if (user) {
            res.send({ "Message": `El usuario ${user.name} se ha creado correctamente` })
        }
    } catch (error) {
        console.log(error)
    }

};

UsersController.updateUser = async (req, res) => {

    let _id = req.body._id;
    let newName = req.body.name;
    let newEmail = req.body.email;
    let newPassword = req.body.password;
    let newRol = req.body.rol;

    try {
        let updated = await User.findOneAndUpdate(
            { _id: _id },
            {
                name: newName,
                email: newEmail,
                password: newPassword,
                rol: newRol,
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`Usuario actualizado`)
        }
    } catch (error) {
        console.log("Error al actualizar el usuario", error);
    }
};

UsersController.deleteUser = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await User.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `Usuario ${deleted.name} borrado correctamente` })
        }
    } catch (error) {
        console.log("Error al borrar usuario", error);
    }
};

UsersController.loginUser = async (req, res) => {

    try {
        let userFound = await User.find({
            email: req.body.email
        })
        if (userFound) {
            
            if (userFound[0].email === undefined) {
                res.send("Contraseña o usuario incorrecto");
            } else {
                if (bcrypt.compareSync(req.body.password, userFound[0].password)) {
                    console.log(userFound[0])
                    let token = jsonwebtoken.sign( {id:userFound[0]._id, rol:userFound[0].rol } , authConfig.SECRET, {
                        expiresIn: authConfig.EXPIRES
                    });
                    let loginOk = `Bienvenido de nuevo, ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        token: token
                    })

                } else {
                    res.send("Contraseña o usuario incorrecto");
                }
            }

        }
    } catch (error) {
        res.send("Contraseña o usuario incorrecto");
    }
};

module.exports = UsersController;