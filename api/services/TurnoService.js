const BaseService = require('./BaseSerivice');
const TurnoRepository = require('../Repository/TurnoRepository'); 
const ExternalServiceException = require('./ExternalServiceException'); 

class TurnoService extends BaseService{

    constructor(){
        super (TurnoRepository);    
    }

    async findAllByUserId(id){
        console.log("PASO Turno Service");
        try{      
            return await this.repo.findAllByUserId(id); 
        } catch(err){
            console.log("PASO Exceptio Service");
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }
}

module.exports = TurnoService;
