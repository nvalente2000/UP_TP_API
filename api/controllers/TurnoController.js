
const TurnoRepository = require('../Repository/TurnoRepository'); 
const BaseController = require('./BaseController');

class TurnoController extends BaseController{

    constructor(){
        super (TurnoRepository);    
    }

}
module.exports = TurnoController;