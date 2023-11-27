const BaseRepository = require('./BaseRepository'); 
const ItemCalificacion = require('../models/ItemCalificacionModel'); 

class ItemCalificacionRepository extends BaseRepository {
    constructor(){
        super(ItemCalificacion);
    }
}

module.exports = ItemCalificacionRepository;