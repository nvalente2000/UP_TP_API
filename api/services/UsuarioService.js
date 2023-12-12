const BaseService = require('./BaseSerivice');
//const TurnoService = require('./TurnoService');
const UsuarioRepository = require('../Repository/UsuarioRepository'); 
const TurnoRepository = require('../Repository/TurnoRepository'); 

class UsuarioService extends BaseService{

    constructor(){
        super (UsuarioRepository);    
        this.turnoRepository = new TurnoRepository();
    }

    async findByDNI(dni){
        try{      
            return await this.repo.findByDNI(dni); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

    async findByIdAllTurnos(id){
        try{      
            return await this.turnoRepository.findAllByUserId(id); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

}

module.exports = UsuarioService;
