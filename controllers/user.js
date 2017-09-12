/************************************************
*                                               *
*                   USER MODEL                  *
*                                               *
************************************************/

'use strict'

//modules
var bcrypt = require('bcrypt-nodejs');

//models
var User = require ('../models/user');


function test(req, res){
    res.status(200).send({
        message: 'testing user controller'
    })
}


function saveUser(req, res){
    //Creation User Object
    var user = new User();

    //Call request parameters
    var params = req.body;

    console.log(params);




    res.status(200).send({
        message: 'Mehtod User Login'
    })
}


module.exports = {
    test,
    saveUser
};