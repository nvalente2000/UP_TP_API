
class BaseController {

    constructor(repoClass){
        this.repo = new repoClass();
    }
    
    getAll = async (req, res) => {

        await this.repo.findAll().then( docs => {
            return res.status(200).send({docs});       
        }).catch( err => {
            return res.status(500).send({message:err.message }); 
        }); 
    }

    getById = async (req, res) => {
        
        let id = req.params.id;
        await this.repo.findById(id).then( docs => {
            return res.status(200).send({docs});       
        }).catch( err => {
            return res.status(500).send({message:err.message }); 
        }); 
    }

    add = async(req, res) => {

        await this.repo.create(req.body).then( docs => {
            return res.status(201).send({docs});       
        }).catch( err => {
            return res.status(500).send({message:err.message }); 
        }); 
    }

    update = async(req, res) => {

        const body = req.body;
        await this.repo.update(body).then( docs => {
            return res.status(200).send({docs});       
        }).catch( err => {
            return res.status(500).send({message:err.message }); 
        }); 
    }

    deleteById = async(req, res) => {
        
        const id = req.params.id;
        await this.repo.deleteById(id).then( docs => {
            return res.status(201).send({docs});       
        }).catch( err => {
            return res.status(500).send({message:err.message }); 
        }); 
    }   
}

module.exports = BaseController;