
const TurnoService = require('../services/TurnoService'); 
const BaseController = require('./BaseController');

class TurnoController extends BaseController{

    constructor(){
        super (TurnoService);    

    }

    getAllByUserId = async (req, res) => {
        console.log("PASO Turno controller");
        let id = req.params.id;
        console.log(id);
        await this.service.findAllByUserId(id).then( docs => {
            return res.status(200).send({docs});       
        }).catch( err => {
            return res.status(500).send({message:err.message }); 
        }); 
    }


}
module.exports = TurnoController;