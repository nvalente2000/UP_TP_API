const BaseRepository = require('./BaseRepository'); 
const Turno = require('../models/TurnoModel'); 

class TurnoRepository extends BaseRepository {
    constructor(){
        super(Turno);
    }
}

module.exports = TurnoRepository;