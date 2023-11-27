const BaseRepository = require('./BaseRepository'); 
const SucursalModel = require('../models/SucursalModel'); 

class SucursalRepository extends BaseRepository {
    constructor(){
        super(SucursalModel);
    }
}

module.exports = SucursalRepository;