
const UsuarioService = require('../services/UsuarioService'); 
const BaseController = require('./BaseController');

class UsuarioController extends BaseController{

    constructor(){
        super (UsuarioService);    
    }

}
module.exports = UsuarioController;
