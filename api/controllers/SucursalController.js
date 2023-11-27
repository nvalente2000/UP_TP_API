
const SucursalService = require('../services/SucursalService'); 
const BaseController = require('./BaseController');

class SucursalController extends BaseController{

    constructor(){
        super (SucursalService);    
    }

}
module.exports = SucursalController;