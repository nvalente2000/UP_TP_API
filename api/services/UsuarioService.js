const BaseService = require('./BaseSerivice');
const UsuarioRepository = require('../Repository/UsuarioRepository'); 
const TurnoService = require ('./TurnoService');

class UsuarioService extends BaseService{

    constructor(){
        super (UsuarioRepository);    
        this.serviceTurno = new TurnoService();
    }

    async findByIdAllTurnos(id){
        try{      
            return await this.serviceTurno.findAllByUserId(id);

        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+ err.message, err);
        }
    }
}

module.exports = UsuarioService;
