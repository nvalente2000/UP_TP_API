
const RoleService = require('../services/RoleService'); 
const UsuarioService = require('../services/UsuarioService'); 

async function createRoles () {

    try{
        const roleService = new RoleService();
        const usuarioService = new UsuarioService();

        const countRoles = await roleService.cantidadEntidades();
        const countUsers = await usuarioService.cantidadEntidades();
    
        if (countRoles <= 0) {
            const values = await Promise.all(
                roleService.create({nombre:'ADMIN', descripcion:'Administrador'}), 
                roleService.create({nombre:'USUARIO', descripcion:'Cliente'}),
                roleService.create({nombre:'EMPLEADO', descripcion:'Empleado sucursal'}),
            )
        }

        if (countUsers <= 0) {
            const values = await Promise.all(
                usuarioService.create( { dni: "sysadmin", email: "nicolas@sysadmin.com", password: "sysadmin", roles:  ["ADMIN"] })
            )
        }

        return;
        
    } catch (error){
        console.log(`Error: ${error}`);
    }
}

module.exports = createRoles;
