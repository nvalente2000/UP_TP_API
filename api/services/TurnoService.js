const BaseService = require('./BaseSerivice');
const UsuarioService = require('./UsuarioService'); 
const SucursalService = require('./SucursalService'); 
const TurnoRepository = require('../Repository/TurnoRepository'); 

const ExternalServiceException = require('./ExternalServiceException'); 

class TurnoService extends BaseService{

    constructor(){
        super (TurnoRepository);    
        this.usuarioService = new UsuarioService();
        this.sucursalService = new SucursalService();
    }

    async findByFecha(fecha){
        try{      
            return await this.repo.findByFecha(fecha); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

    async addByUsuarioAndSucursal (body) {       

        // Completo con UserID y SucursalID
        try {
            if (Array.isArray(body)) {
                await Promise.all(body.map(async (element, index) => {
                    //console.log(`Elemento ${index + 1}:`, element);
                    await this.completoWithUserId(element);
                    await this.completoWithSucursalId(element);
                    //console.log(`Elemento completado ${index + 1}:`, body[index]);
                }));
            } else {
                await this.completoWithUserId(body);
                await this.completoWithSucursalId(body);
            }
        } catch (err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+ err.message, err);
        }

        // Guardo
        try{      
            return await this.create(body); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }   
    
    async completoWithSucursalId (model){
        try {
            const codigoSucursal = model.codigoSucursal;
            var sucursal = await this.sucursalService.findByCodigo(codigoSucursal);  
            if (!sucursal) 
                throw new ExternalServiceException('Sucursal no existe: '+ err.message, err);
            model.sucursalId = sucursal._id;
        } catch (err){
            throw new ExternalServiceException('Ocurrio un problema con el Nombre sucursal: '+ err.message, err);
        }
    }
     
    async completoWithUserId (model){
        try {
            const dniUsuario = model.dniUsuario;
            var usuario = await this.usuarioService.findByDNI(dniUsuario);  
            if (!usuario) 
                throw new ExternalServiceException('Usuario no existe: '+ err.message, err);
            model.usuarioId = usuario._id;
        } catch (err){
            throw new ExternalServiceException('Ocurrio un problema con el Nombre Usuario: '+ err.message, err);
        }  
    }
}

module.exports = TurnoService;
