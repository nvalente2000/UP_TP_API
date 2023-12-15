const BaseService = require('./BaseSerivice');
const ItemVehiculoRepository = require('../Repository/ItemVehiculoRepository'); 

class ItemVehiculoService extends BaseService{

    constructor(){
        super (ItemVehiculoRepository);    
    }

    async findByCodigo(codigo){
        try{  
            return await this.repo.findByCodigo(codigo); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }
}

module.exports = ItemVehiculoService;