const BaseService = require('./BaseSerivice');
const TurnoRepository = require('../Repository/TurnoRepository'); 
const ExternalServiceException = require('./ExternalServiceException'); 

class TurnoService extends BaseService{

    constructor(){
        super (TurnoRepository);    
    }

    async findByFecha(fecha){
        try{      
            return await this.repo.findByFecha(fecha); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

    async findAllByUserId(id){
        try{      
            return await this.repo.findAllByUserId(id); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

    async findAllBySucursarId(id){
        try{      
            return await this.repo.findAllBySucursalId(id); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

}

module.exports = TurnoService;
