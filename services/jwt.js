'use strict' // to use new javascript functionality

var jwt = require('jwt-simple');

//moment to work with timestamp
var moment = require ('moment');

var secret = 'secret_key_angular4';

exports.createToken = function(user){

    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        image: user.image,
        //creation token timestamp
        iat: moment().unix(),
        //expire token time
        exp: moment().add(30, 'days').unix(),
    };

    return jwt.encode(payload, secret);

};