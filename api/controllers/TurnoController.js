
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

    updateByFecha = async(req, res) => {       
        
        const fecha = req.params.fecha;
        var body = req.body;
        
        // Busco ID interno usuario
        try {
            var turno = await this.service.findByFecha(fecha);  
            if (!turno) 
                return res.status(StatusCodes.NOT_FOUND).send({message:"Fecha no existe turno." }); 
            body._id = turno._id;

        } catch (err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }
      
        // UPDATE por ID interno turno
        await this.service.update(body).then( docs => {
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

        console.log("PASSO");
        const fechaTurno = req.params.fecha;
        const items = req.body;
        
        await this.service.addItemsVehiculo(fechaTurno, items).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

    addItemsEvaluadosVehiculo = async (req, res) => {

        console.log("PASSO ADD");
        const fechaTurno = req.params.fecha;
        const items = req.body;
        
        await this.service.addItemsVehiculo(fechaTurno, items).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

    deleteItemsEvaluadosVehiculo = async (req, res) => {

        const fechaTurno = req.params.fecha;
        console.log(fechaTurno);
       
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

    getPuntuacion = async (req, res) => {

        const fechaTurno = req.params.fecha;
       
        await this.service.getPuntuacion(fechaTurno).then( puntaje => {
            return res.status(StatusCodes.OK).send({puntaje});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

}
module.exports = TurnoController;