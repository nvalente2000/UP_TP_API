require('dotenv').config(); 
const UsuarioService = require('../services/UsuarioService'); 
const RoleService = require('../services/RoleService'); 
const {StatusCodes } = require('http-status-codes');
const Role = require('../models/RoleModel');
const jwt = require('jsonwebtoken');
const { ConnectionPoolReadyEvent } = require('mongodb');


async function authenticateToken  (req, res, next ) {

    const token = req.headers["x-acess-token"]; 

    // Valido que e token este enviado en el header
    if (!token) return res.status(StatusCodes.FORBIDDEN).send({message:"Token no esta enviado." });

    // Extraigo el contenido del token que es el _Id
    try{
        var decoded = jwt.verify(token,process.env.SECRET_JWT); 
        req.userId = decoded.id;    
    } catch (err){
        return res.status(StatusCodes.UNAUTHORIZED).send({message:"El Token no es valido." });
    }

    console.log("Authentication Sucess");
    next();
}

async function verifyUserReq  (req, res, next ) {

    // Verifico usuario
    usuarioService = new UsuarioService();
    usuario = await usuarioService.findById(req.userId);
    
    if (!usuario) return res.status(StatusCodes.NOT_FOUND).send({message: 'Usuario no existe'});
  
    console.log("Verify User Sucess");
    next();
}


async function isAdmin (req, res, next ) {

    try{  
        const usuarioService = new UsuarioService();
        usuario = await usuarioService.findById(req.userId);

        const roles = await Role.find( {_id: {$in : usuario.rolesId}} );

        for (let i = 0; i < roles.length ; i++){
            if (roles[i].nombre === "ADMIN"){                
                console.log("Admin Role Sucess");
                next()
                return;
            }
        }

        return res.status(StatusCodes.UNAUTHORIZED).send({message:"Se requiere Role de Admin" });

    } catch(err){
        return res.status(StatusCodes.UNAUTHORIZED).send({message:"Se produjo un error al autenticar" });
    }
}

async function isEmployee (req, res, next ) {

    try{  
        const usuarioService = new UsuarioService();
        usuario = await usuarioService.findById(req.userId);

        const roles = await Role.find( {_id: {$in : usuario.rolesId}} );

        for (let i = 0; i < roles.length ; i++){
            if (roles[i].nombre === "EMPLEADO"){                
                console.log("Employee Role Sucess");
                next()
                return;
            }
        }

        return res.status(StatusCodes.UNAUTHORIZED).send({message:"Se requiere Role de Empleado" });

    } catch(err){
        return res.status(StatusCodes.UNAUTHORIZED).send({message:"Se produjo un error al autenticar" });
    }
}

async function authorizedRoles (roles ) {

    try{  
        const usuarioService = new UsuarioService();
        usuario = await usuarioService.findById(req.userId);

        const roles = await Role.find( {_id: {$in : usuario.rolesId}} );

        for (let i = 0; i < roles.length ; i++){
   
            include = roles.includes(roles[i].nombre); 
            //console.log("Incluye Role "+ roles[i].nombre + "es: "+ inclue);
            if (roles[i].nombre === "ADMIN"){                
                next()
                return;
            }
        }
        return res.status(StatusCodes.UNAUTHORIZED).send({message:"Se requiere Role de Admin" });

    } catch(err){
        return res.status(StatusCodes.UNAUTHORIZED).send({message:"Se produjo un error al autenticar" });
    }
}


module.exports = {authenticateToken, isAdmin, isEmployee, authorizedRoles, verifyUserReq}; 