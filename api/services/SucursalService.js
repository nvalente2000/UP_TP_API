const BaseService = require('./BaseSerivice');
const SucursalRepository = require('../Repository/SucursalRepository'); 

class SucursalService extends BaseService{

    constructor(){
        super (SucursalRepository);    
    }
}

module.exports = SucursalService;
