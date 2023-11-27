
const ItemCalificacionRepository = require('../Repository/ItemCalificacionRepository'); 
const BaseController = require('./BaseController');

class ItemCalificacionController extends BaseController{

    constructor(){
        super (ItemCalificacionRepository);    
    }

}
module.exports = ItemCalificacionController;