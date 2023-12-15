const BaseRepository = require('./BaseRepository'); 
const ItemVehiculo = require('../models/ItemVehiculoModel'); 

class ItemVehiculoRepository extends BaseRepository {
    constructor(){
        super(ItemVehiculo);
    }

    findByCodigo (codigo){
        return this.collection.findOne( { codigo:codigo }).exec(); 
    }
}

module.exports = ItemVehiculoRepository;