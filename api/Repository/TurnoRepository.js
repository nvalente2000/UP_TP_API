const BaseRepository = require('./BaseRepository'); 
const Turno = require('../models/TurnoModel'); 

class TurnoRepository extends BaseRepository {
    constructor(){
        super(Turno);
    }

    findAllByUserId (id){
        return this.collection.find( { usuario:id }).exec(); 
    }

}
module.exports = TurnoRepository;