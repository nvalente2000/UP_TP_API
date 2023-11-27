
const UsuarioService = require('../services/UsuarioService'); 
const BaseController = require('./BaseController');

class UsuarioController extends BaseController{

    constructor(){
        super (UsuarioService);    
    }

    getAllTurnos = async(req, res) => {
        
        const id = req.params.id;
        await this.service.findByIdAllTurnos(id).then( docs => {
            return res.status(200).send({docs});       
        }).catch( err => {
            return res.status(500).send({message:err.message }); 
        }); 
    }   

}
module.exports = UsuarioController;
