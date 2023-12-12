const SucursalService = require('../services/SucursalService'); 
const BaseController = require('./BaseController');
const {StatusCodes } = require('http-status-codes');

class SucursalController extends BaseController{

    constructor(){
        super (SucursalService);    
    }

    getByCodigo = async(req, res) => {
        
        const codigo = req.params.codigo;
        await this.service.findByCodigo(codigo).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   

    getAllTurnosByCodigo = async(req, res) => {       
        
        const codigo = req.params.codigo;
        var sucursal; 
        
        // Busco Sucursal por codigo
        try {
            sucursal = await this.service.findByCodigo(codigo);  
            if (!sucursal) 
                return res.status(StatusCodes.NOT_FOUND).send({message:"sucursal no existe." }); 
        } catch (err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }

        // BUSTO TODOS los turnos por ID interno sucursal
        await this.service.findByIdAllTurnos(sucursal._id).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   

    deleteByCodigo = async(req, res) => {       
        
        const codigo = req.params.codigo;
        var sucursal; 
        
        // Busco ID interno sucursal
        try {
            sucursal = await this.service.findByCodigo(codigo);  
            if (!sucursal) 
                return res.status(StatusCodes.NOT_FOUND).send({message:"sucursal no existe." }); 
        } catch (err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }
      
        // DELETE por ID interno sucursal
        await this.service.deleteById(sucursal._id).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   

    updateByCodigo = async(req, res) => {       
        
        const codigo = req.params.codigo;
        const body = req.body;
       
        // Busco ID interno sucursal
        try {
            var sucursal = await this.service.findByCodigo(codigo); 
            if (!sucursal) 
                return res.status(StatusCodes.NOT_FOUND).send({message:"sucursal no existe." }); 
            body._id = sucursal._id;
        } catch (err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }
      
        // DELETE por ID interno sucursal
        await this.service.update(body).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   
  
}

module.exports = SucursalController;