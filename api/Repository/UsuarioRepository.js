const BaseRepository = require('./BaseRepository'); 
const Usuario = require('../models/UsuarioModel'); 

class UsuarioRepository extends BaseRepository {
    constructor(){
        super(Usuario);
    }
    
    findByDNI (dni){
        return this.collection.findOne( { dni:dni }).exec(); 
    }
}


module.exports = UsuarioRepository;