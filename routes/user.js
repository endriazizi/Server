/************************************************
*                                               *
*                   USER CONTROLLER             *
*                                               *
************************************************/

'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

//UserController.test <- tes is the method into contollers/user.js
api.get('/test-user-contoller', UserController.test);

api.post('/register', UserController.saveUser);


module.exports = api;

