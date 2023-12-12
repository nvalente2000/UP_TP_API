const BaseService = require('./BaseSerivice');
//const TurnoService = require('./TurnoService');
const SucursalRepository = require('../Repository/SucursalRepository'); 
const TurnoRepository = require('../Repository/TurnoRepository'); 

class SucursalService extends BaseService{

    constructor(){
        super (SucursalRepository);    
        this.turnoRepository = new TurnoRepository();
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
            return await this.turnoRepository.findAllBySucursalId(id); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

}

module.exports = SucursalService;
