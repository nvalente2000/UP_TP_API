
const TurnoService = require('../services/TurnoService'); 
const BaseController = require('./BaseController');

class TurnoController extends BaseController{

    constructor(){
        super (TurnoService);    
    }

}
module.exports = TurnoController;