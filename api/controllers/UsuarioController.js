
const UsuarioRepository = require('../Repository/UsuarioRepository'); 
const BaseController = require('./BaseController');

class UsuarioController extends BaseController{

    constructor(){
        super (UsuarioRepository);    
    }

}
module.exports = UsuarioController;
