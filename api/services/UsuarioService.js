const BaseService = require('./BaseSerivice');
const UsuarioRepository = require('../Repository/UsuarioRepository'); 

class UsuarioService extends BaseService{

    constructor(){
        super (UsuarioRepository);    
    }
}

module.exports = UsuarioService;
