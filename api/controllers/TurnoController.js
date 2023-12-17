
const TurnoService = require('../services/TurnoService'); 
const BaseController = require('./BaseController');
const {StatusCodes} = require('http-status-codes');

class TurnoController extends BaseController{

    constructor(){
        super (TurnoService);    
    }

    getByFecha = async(req, res) => {
        
        const fecha = req.params.fecha;
        await this.service.findByFecha(fecha).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   


    addByUsuarioAndSucursal = async(req, res) => {

        const body = req.body;

        await this.service.addByUsuarioAndSucursal(body).then( docs => {
            return res.status(StatusCodes.OK).send(body);       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    
    }

    deleteByFecha = async(req, res) => {       
        
        const fecha = req.params.fecha;
        var turno; 
        
        // Busco ID interno usuario
        try {
            turno = await this.service.findByFecha(fecha);  
            if (!turno) 
                return res.status(StatusCodes.NOT_FOUND).send({message:"Fecha no existe turno." }); 
        } catch (err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }
      
        // DELETE por ID interno turno
        await this.service.deleteById(turno._id).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   

    updateByFechaAndVerificacionTurnoLibre = async(req, res) => {       
        
        const fecha = req.params.fecha;
        var body = req.body;
            
        await this.service.updateByFechaAndVerificacionTurnoLibre(fecha, body).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   

    getAllLibres = async (req, res) => {

        const limite = req.params.limite;
        
        await this.service.getTurnosLibres(limite).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

    addItemsEvaluadosVehiculo = async (req, res) => {

        const fechaTurno = req.params.fecha;
        const items = req.body;
        
        await this.service.addItemsVehiculo(fechaTurno, items).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

    updateItemsEvaluadosVehiculo = async (req, res) => {

        const fechaTurno = req.params.fecha;
        const items = req.body;
        
        await this.service.updateItemsVehiculo(fechaTurno, items).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

    deleteItemsEvaluadosVehiculo = async (req, res) => {

        const fechaTurno = req.params.fecha;
       
        await this.service.deleteItemsVehiculo(fechaTurno).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }
    
    getItemsEvaluadosVehiculo = async (req, res) => {

        const fechaTurno = req.params.fecha;
       
        await this.service.getItemsVehiculo(fechaTurno).then( itemsVehiculo => {
            return res.status(StatusCodes.OK).send({itemsVehiculo});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

    getEvaluacion = async (req, res) => {

        const fechaTurno = req.params.fecha;
       
        await this.service.getEvaluacion(fechaTurno).then( evaluacion => {
            return res.status(StatusCodes.OK).send({evaluacion});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

}
module.exports = TurnoController;