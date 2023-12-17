const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const { ConnectionClosedEvent } = require('mongodb');
const Role = require('./RoleModel');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const usuarioSchema = new Schema( 
    {
        _id:            { type: ObjectId, auto:true } ,
        dni:            { type: String, unique:true, required: true },
        email:          { type: String,  unique:true, required:true },
        nombre:         { type: String, requared:false },
        apellido:       { type: String, requared:false },
        passwordHash:   { type: String, requared:true },
        rolesId:        [ {type: ObjectId, ref:'roles'}],  
    },
    { versionKey:false, timestamps: true }
);

// Defino plugin (actua como mifleware) para Hash y Id Role
function preTreatment(schema) {

    schema.add({ password: String });
    schema.add({ roles: [String] });

    schema.pre('save', async function (next) {
      try {
        // Agrego Id Roles
        if (this.roles && this.roles.length > 0){
          const foundRoles = await Role.find( { nombre:{$in:this.roles} } ).exec();
          this.rolesId = foundRoles.map(role=>role._id);
        } else {  // Default Role
          const foundRole = await Role.findOne( { nombre:'USUARIO' } ).exec();
          this.rolesId = [foundRole._id];
        }
        this.roles = undefined;

        // Hashe Password        
        if (this.isModified('password')) {
          this.passwordHash = await this.encryptPass(this.password);
          this.password = undefined;
        }
        next();
      } catch (error) {
        next(error);
      }
    });
  }

usuarioSchema.methods.encryptPass = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  return await bcryptjs.hash(password, salt); 
}

usuarioSchema.plugin( preTreatment );

const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuario;