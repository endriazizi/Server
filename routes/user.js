/************************************************
*                                               *
*                   USER CONTROLLER             *
*                                               *
************************************************/

'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

var middleware_auth = require('../middleware/auth');

//UserController.test <- tes is the method into contollers/user.js
api.get('/test-user-contoller', middleware_auth.ensureAuth, UserController.test);

api.post('/register', UserController.saveUser);
api.post('/login', UserController.login);
//PUT to update
api.put('/update-user/:id', middleware_auth.ensureAuth, UserController.updateUser);


module.exports = api;

