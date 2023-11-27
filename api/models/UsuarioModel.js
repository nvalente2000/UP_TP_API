const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const usuarioSchema = new Schema( 
    {
        _id:        { type: ObjectId, auto:true } ,
        dni:        { type: String, unique:true, required: true },
        email:      { type: String,  unique:true, required:true },
        nombre:     { type: String, requared:false },
        apellido:   { type: String, requared:false },
        password:   { type: String, requared:true },
        roles : [{ 
            name:{ type: String, requared:true,},
            descripcion:{ type: String, requared:false}
        }]
    },
    { timestamps: true}
);

const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuario;