const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const turnoSchemna = new Schema(
    {
        _id:                { type: ObjectId, auto:true },
        fecha :             { type: Date,  unique:true, requared:true },
        patente:            { type: String, required: true }, 
        sucursalId:         { type: ObjectId, ref:'sucursales'},     // One to May con sucursales.
        usuarioId:          { type: ObjectId, ref:'usuarios'},       // One to May con usuarios.
        itemsVehiculo : [{ 
            name:{ type: String, requared:true,},
            observacion:{ type: String, requared:true}, 
            puntaje:{ type: Number, requared:true}, 
        }]
    },
    { versionKey:false, timestamps: true }
);

const Turno = mongoose.model("turnos", turnoSchemna);

module.exports = Turno;