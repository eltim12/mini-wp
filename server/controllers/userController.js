const User = require("../models/user");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();
const bcrypt = require("../helpers/bcrypt");

module.exports = {
    findAll(req, res) {
        User.find({})
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                console.log("========ERROR========");
                res.status(404).json(err);
            });
    },

    findOne(req, res) {
        User.findById(req.query.id)
            .then(foundUser => {
                console.log(foundUser.data)
                res.status(200).json(foundUser);
            })
            .catch(err => {
                console.log("========ERROR========");
                res.status(404).json(err);
            });
    },

    editProfile(req, res) {
        User.findOneAndUpdate(req.query.id, req.body)
            .then(userUpdated => {
                res.status(200).json(userUpdated);
            })
            .catch(err => {
                console.log("========ERROR========");
                console.log(err);
                res.status(404).json({
                    message: err.message
                });
            });
    },

    register(req, res) {
        console.log(req.body, 'inside user controller=======')
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
            .then(userCreated => {
                res.status(201).json(userCreated);
            })
            .catch(err => {
                console.log("========ERROR========");
                console.log(err);
                res.status(404).json({
                    message: err.message
                });
            });
    },

    login(req, res) {
        console.log("user '", req.body.username, "' success login");
        User.find({
            username: req.body.username
        })
            .then(userFound => {
                if (!userFound[0]) {
                    throw new Error("username/password wrong.");
                } else {
                    if (bcrypt.compare(req.body.password, userFound[0].password) === false) {
                        throw new Error("username/password wrong.");
                    } else {
                        let token = jwt.sign({ userFound }, process.env.SECRET_KEY);
                        res.status(201).json({
                            token,
                            userId: userFound[0]._id
                        });
                    }
                }
            })
            .catch(err => {
                // console.log("========ERROR========")
                console.log(err.message);
                res.status(500).json({
                    msg: err.message
                });
            });
    }
};
