const BaseService = require('./BaseSerivice');
const UsuarioService = require('./UsuarioService'); 
const SucursalService = require('./SucursalService'); 
const TurnoRepository = require('../Repository/TurnoRepository'); 
const moment = require ('moment');

const ExternalServiceException = require('./ExternalServiceException'); 

class TurnoService extends BaseService{

    constructor(){
        super (TurnoRepository);    
        this.usuarioService = new UsuarioService();
        this.sucursalService = new SucursalService();
        this.horasDisponibles = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
        this.diasMaxAFrente = 7;
    }

    async findByFecha(fecha){
        try{      
            return await this.repo.findByFecha(fecha); 
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }
    }

    async addByUsuarioAndSucursal (body) {       

        try {
            var turnosLibres = await this.getTurnosLibres(this.diasMaxAFrente);  

            if (Array.isArray(body)) {
                await Promise.all(body.map(async (element, index) => {

                    console.log("Itero elemento: " + element);
                    // Completo con UserID y SucursalID y guardo
                    //console.log(`Elemento ${index + 1}:`, element);
                    await this.completoWithUserId(element);
                    await this.completoWithSucursalId(element);
                    //console.log(`Elemento completado ${index + 1}:`, body[index]);

                    // Agrego turno si esta disponible
                    if (await this.estaTurnoSolicitadoEnListaDelibres(element.fecha) ){
                        console.log("GUARDO");
                        return await this.create(element); 
                    }
                    else {
                        throw new ExternalServiceException('Horario indisponible');
                    }
                }));      

            } else {
                
                await this.completoWithUserId(body);
                await this.completoWithSucursalId(body);

                // Agrego turno si esta disponible
                if (this.estaTurnoSolicitadoEnListaDelibres(ody.fecha) )
                    return await this.create(body); 
                else 
                    throw new ExternalServiceException('Horario indisponible');

            }
        } catch (err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+ err.message, err);
        }

        // Guardo verificando que sea un turno disponible. 
        /*
        try{      
            var turnosAgendados = await this.findAll();  
            let fechaSolicitada = moment (body.fecha);

            if ( this.estaTurnoSolicitadoDisponible(fechaSolicitada, turnosAgendados)) {
                return await this.create(body); 
            } else {
                throw new ExternalServiceException('Horario indisponible');
            };
            
        } catch(err){
            throw new ExternalServiceException('Ocurrio un problema externo: '+err.message, err);
        }*/
    }   
    
    async completoWithSucursalId (model){
        try {
            const codigoSucursal = model.codigoSucursal;
            var sucursal = await this.sucursalService.findByCodigo(codigoSucursal);  
            if (!sucursal) 
                throw new ExternalServiceException('Sucursal no existe: ');
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


    async getTurnosLibres (diasParaFrente){
        
        try {
            var turnosAgendados = await this.findAll();  
            const fechaInicio = moment(); 

            const turnos = [];

            // Itero cada dia de la agenda. 
            for (let i = 0; i < diasParaFrente; i++) {
              
                const fechaTurno = fechaInicio.clone().add(i, 'days');
             
                // Verifico por cada horario si esta disponible.
                this.horasDisponibles.forEach((hora) => {

                    const fechaHoraTurno = fechaTurno.clone().set({ hour: hora.split(':')[0], minute: hora.split(':')[1] });

                    if ( this.estaTurnoSolicitadoDisponible(fechaHoraTurno, turnosAgendados)) {
                        turnos.push(fechaHoraTurno.format('YYYY-MM-DD HH:mm'));
                    };
              });
            }
          
            return turnos;

        } catch (err){
            throw new ExternalServiceException('Ocurrio un problema con la busqueda de turnos libres: '+ err.message, err);
        }  
    }
    
    estaTurnoSolicitadoDisponible (fechaTurnoSolicitado , turnosAgendados){
        
        //let j = 0;
        let estaTurno = false; 
        turnosAgendados.forEach (turno => {
            //j++;
            let fechaAgendada = moment (turno.fecha);
            
            //console.log("Iteracion: " + ". Horario libre: " +fechaTurnoSolicitado.format('YYYY-MM-DD HH:mm') + " Horario Agenda: " +  fechaAgendada.format('YYYY-MM-DD HH:mm'));
            if ( fechaTurnoSolicitado.isSame(fechaAgendada, 'minute' ) ){
                estaTurno = true;
                console.log("true");
            }
        });
        if (estaTurno)
            return false;
        return true; 
    }

    async estaTurnoSolicitadoEnListaDelibres (fechaTurnoSolicitado ){
        console.log(this.diasMaxAFrente);
        var turnosLibres = await this.getTurnosLibres(this.diasMaxAFrente);  
        let fechaSolicitada = moment (fechaTurnoSolicitado);   

        let estaTurno = false; 
        turnosLibres.forEach (turno => {
            let fechaAgendada = moment (turno);            
            console.log("Horario Solicitado: " + fechaSolicitada.format('YYYY-MM-DD HH:mm') + " Horario Libre: " +  fechaAgendada.format('YYYY-MM-DD HH:mm'));
             
            if ( fechaSolicitada.isSame(fechaAgendada, 'minute' ) ){
                estaTurno = true;
            }
        });

        if (estaTurno)
            return true;
        return false; 
    }

}

module.exports = TurnoService;
