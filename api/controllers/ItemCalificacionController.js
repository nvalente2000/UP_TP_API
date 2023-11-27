
const ItemCalificacionService = require('../services/ItemCalificacionService'); 
const BaseController = require('./BaseController');

class ItemCalificacionController extends BaseController{

    constructor(){
        super (ItemCalificacionService);    
    }

}
module.exports = ItemCalificacionController;