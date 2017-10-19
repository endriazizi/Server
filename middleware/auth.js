'use strcit' //new javascript version functionality like fat arrow

var jwt = require('jwt-simple');

//moment to work with timestamp
var moment = require ('moment');

var secret = 'secret_key_angular4';

exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({message:'request do not have key authorization'});

    }
    
    //regular expression replace(/[<<<'">>>]+/g, <<<'with null'>>>);
    var token = req.headers.authorization.replace(/['"]+/g, '');
    try{
        var playload = jwt.decode(token, secret);

        if(playload.exp <= moment().unix()){
            return res.status(401).send({
                message:'token expire'
            });
        }

    }catch(ex){
        return res.status(404).send({
            message:'token is not valid'
        });       
    }
    req.user = playload;

    next();
}