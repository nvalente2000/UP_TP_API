const BaseService = require('./BaseSerivice');
const ItemCalificacionRepository = require('../Repository/ItemCalificacionRepository'); 

class ItemCalificacionService extends BaseService{

    constructor(){
        super (ItemCalificacionRepository);    
    }
}

module.exports = ItemCalificacionService;
