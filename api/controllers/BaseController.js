const {StatusCodes } = require('http-status-codes');

class BaseController {

    constructor(serviceClass){
        this.service = new serviceClass();
    }
    
    getAll = async (req, res) => {

        await this.service.findAll().then( docs => {
            return res.status(StatusCodes.OK).send({docs}); //200      
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); //500
        }); 
    }

    getById = async (req, res) => {
        
        let id = req.params.id;
        await this.service.findById(id).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

    add = async(req, res) => {

        await this.service.create(req.body).then( docs => {
            return res.status(StatusCodes.CREATED).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

    update = async(req, res) => {

        const body = req.body;
        await this.service.update(body).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }

    deleteById = async(req, res) => {
        
        const id = req.params.id;
        await this.service.deleteById(id).then( docs => {
            return res.status(StatusCodes.OK).send({docs});       
        }).catch( err => {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:err.message }); 
        }); 
    }   
}

module.exports = BaseController;