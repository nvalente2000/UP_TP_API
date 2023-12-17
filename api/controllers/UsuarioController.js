
require('dotenv').config(); 
const UsuarioService = require('../services/UsuarioService'); 
const BaseController = require('./BaseController');
const {StatusCodes } = require('http-status-codes');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');



class UsuarioController extends BaseController{

    constructor(){
        super (UsuarioService);    
    }

    getByDNI = async(req, res) => {
        
        const dni = req.params.dni;
        await this.service.findByDNI(dni).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   

    addUsuario = async(req, res) => {       
        
        const dni = req.body.dni;
        console.log("El dni es: "+ dni);
        var body = req.body;
        
        // Busco ID interno usuario
        try {
            var usuario = await this.service.findByDNI(dni);  
            console.log("El usuario es: "+usuario);
            if (usuario) 
                return res.status(StatusCodes.BAD_REQUEST).send({message:"Usuario ya existe." }); 
        } catch (err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }
      
        // ADD 
        await this.service.create(body).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   


    getAllTurnosByDNI = async(req, res) => {       
        
        const dni = req.params.dni;
        var usuario; 
        
        // Busco ID interno usuario
        try {
            usuario = await this.service.findByDNI(dni);  
            if (!usuario) 
                return res.status(StatusCodes.NOT_FOUND).send({message:"Usuario no existe." }); 
        } catch (err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }

        // BUSTO TODOS los turnos por ID interno usuario
        await this.service.findByIdAllTurnos(usuario._id).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 

    }   

    deleteByDNI = async(req, res) => {       
        
        const dni = req.params.dni;
        var usuario; 
        
        // Busco ID interno usuario
        try {
            usuario = await this.service.findByDNI(dni);  
            if (!usuario) 
                return res.status(StatusCodes.NOT_FOUND).send({message:"Usuario no existe." }); 
        } catch (err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }
      
        // DELETE por ID interno usuario
        await this.service.deleteById(usuario._id).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   

    updateByDNI = async(req, res) => {       
        
        const dni = req.params.dni;
        var body = req.body;

        // Busco ID interno usuario
        try {
            var usuario = await this.service.findByDNI(dni);  
            if (!usuario) 
                return res.status(StatusCodes.NOT_FOUND).send({message:"Usuario no existe." }); 
            body._id = usuario._id;
        } catch (err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }
      
        // DELETE por ID interno usuario
        await this.service.update(body).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   

    signIn = async(req, res) => {       
        
        try {
            const dni = req.body.dni;
            const password = req.body.password;
            
            // Busco usuario 
            var userFound = await this.service.findByDNI(dni);//.populate('rolesId');  
            if (!userFound) 
                return res.status(StatusCodes.BAD_REQUEST).send({message:"Usuario no existe." }); 

            // Valido Key y retorno Jwt
            const match = await bcryptjs.compare(password, userFound.passwordHash );
            if (!match) return res.status(StatusCodes.UNAUTHORIZED).send({message:"Password invalida." }); 

            // Retorno Token
            const token = jwt.sign( {id:userFound._id} , process.env.SECRET_JWT, {
                expiresIn: 86400 // 24hs
            })

            res.status(StatusCodes.OK).json({token});

        } catch (err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }      
    }   
}
module.exports = UsuarioController;
