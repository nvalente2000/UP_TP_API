const BaseService = require('./BaseSerivice');
const TurnoRepository = require('../Repository/TurnoRepository'); 

class TurnoService extends BaseService{

    constructor(){
        super (TurnoRepository);    
    }
}

module.exports = TurnoService;
