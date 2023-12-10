const BaseRepository = require('./BaseRepository'); 
const Sucursal = require('../models/SucursalModel'); 

class SucursalRepository extends BaseRepository {
    constructor(){
        super(Sucursal);
    }

    findByCodigo (codigo){
        return this.collection.findOne( { codigo:codigo }).exec(); 
    }
}

module.exports = SucursalRepository;