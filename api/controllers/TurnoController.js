
const TurnoService = require('../services/TurnoService'); 
const BaseController = require('./BaseController');
const {StatusCodes } = require('http-status-codes');

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

    getAllByUserId = async (req, res) => {
        let id = req.params.id;
        console.log(id);
        await this.service.findAllByUserId(id).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

    getAllBySucursalId = async (req, res) => {
        let id = req.params.id;
        console.log(id);
        await this.service.findAllBySucursarId(id).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }



}
module.exports = TurnoController;