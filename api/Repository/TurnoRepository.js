const BaseRepository = require('./BaseRepository'); 
const Turno = require('../models/TurnoModel'); 

class TurnoRepository extends BaseRepository {
    constructor(){
        super(Turno);
    }

    findByFecha (fecha){
        return this.collection.findOne( { fecha:fecha }).exec(); 
    }              

    findAllByUserId (id){
        return this.collection.find( { usuarioId:id }).exec(); 
    }

    findAllBySucursalId (id){
        return this.collection.find( { sucursalId:id }).exec(); 
    }

}
module.exports = TurnoRepository;