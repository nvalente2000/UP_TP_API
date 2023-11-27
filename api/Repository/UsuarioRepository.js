const BaseRepository = require('./BaseRepository'); 
const Usuario = require('../models/UsuarioModel'); 

class UsuarioRepository extends BaseRepository {
    constructor(){
        super(Usuario);
    }
}

module.exports = UsuarioRepository;