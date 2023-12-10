const BaseService = require('./BaseSerivice');
const TurnoService = require ('./TurnoService');
const SucursalRepository = require('../Repository/SucursalRepository'); 

class SucursalService extends BaseService{

    constructor(){
        super (SucursalRepository);    
        this.serviceTurno = new TurnoService();
    }

    async findByCodigo(codigo){
        try{      
            return await this.repo.findByCodigo(codigo); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

    async findByIdAllTurnos(id){
        try{      
            return await this.serviceTurno.findAllBySucursarId(id);
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+ err.message, err);
        }
    }

}

module.exports = SucursalService;
