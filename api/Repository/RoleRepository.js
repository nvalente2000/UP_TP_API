const BaseRepository = require('./BaseRepository'); 
const Role = require('../models/RoleModel'); 

class RoleRepository extends BaseRepository {
    constructor(){
        super(Role);
    }

    findByName (nombre){
        return this.collection.findOne( { nombre:nombre }).exec(); 
    }
}

module.exports = RoleRepository;