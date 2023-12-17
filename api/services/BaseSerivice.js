
const ExternalServiceException = require('./ExternalServiceException'); 

class BaseService {

    constructor(repoClass){
        this.repo = new repoClass();
    }

    async findAll (){
        try{      
            return await this.repo.findAll();
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

    async findById(id){
        try{      
            return await this.repo.findById(id); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

    async create (model){
        try{      
            return await this.repo.create(model);
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+ err.message, err);
        }
    }

    async update (model){
        try{      
            return await this.repo.update(model);
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+ err.message, err);
        }
    }

    async deleteById(id){
        try{      
            return await this.repo.deleteById(id);
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+ err.message, err);
        }
    }

    async cantidadEntidades(){
        try{      
            return await this.repo.cantidadEntidades();
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+ err.message, err);
        }
    }
}

module.exports = BaseService;