const BaseService = require('./BaseSerivice');
const RoleRepository = require('../Repository/RoleRepository'); 

class RoleService extends BaseService{

    constructor(){
        super (RoleRepository);    
    }

    async findByName(nombre){
        try{  
            return await this.repo.findByName(nombre); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

}

module.exports = RoleService;
