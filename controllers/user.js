/************************************************
 *                                               *
 *                   USER MODEL                  *
 *                                               *
 ************************************************/

'use strict'

//modules
var bcrypt = require('bcrypt-nodejs');

//models
var User = require('../models/user');

//method test
function test(req, res) {
    res.status(200).send({
        message: 'ROUTE TEST API'
    });
}

// OTHER ROUTES - http://localhost:3789/api/register

/*
http://localhost:3789/api/register
testing on POSTMAN
passing data under x-wwww-form-urlencoded mandatory fileds are (name, surname, password, email)
*/

//method saveUser
function saveUser(req, res) {
    //Creation User Object
    var user = new User();
    //Call request parameters for body
    var params = req.body;
    //  console.log(params);

    if (params.password && params.name && params.surname && params.email) {

        // assign value to user object
        user.name = params.name;
        user.surname = params.surname;
        user.email = params.email;
        user.role = 'ROLE_USER';
        user.image = null;

        User.findOne({email: user.email.toLowerCase()}, (err, issetUser) => {
            if (err) {
                res.status(500).send({
                    message: 'error saving user'
                });
            } else {
                if (!issetUser) {

                    //hashing password
                    bcrypt.hash(params.password, null, null, function (err, hash) {
                        user.password = hash;
                        // see user at database
                        user.save((err, userStored) => {
                            if (err) {
                                res.status(500).send({
                                    message: 'error saving user'
                                });
                            } else {
                                if (!userStored) {
                                    res.status(404).send({
                                        message: 'user not registered'
                                    });
                                } else {
                                    res.status(200).send({
                                        user: userStored
                                    });
                                }
                            }
                        });
                    });

                } else {
                    res.status(200).send({
                        message: 'user cannot register'
                    });
                }
            }

        });

    } else {
        res.status(200).send({
            message: 'enter the data correctly CIAOOO to register the user'
        });
    }
}


module.exports = {
    test,
    saveUser
};