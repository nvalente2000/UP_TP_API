const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const turnoSchemna = new Schema( 
    {
        _id:                { type: ObjectId, auto:true },
        fecha :             { type: Date,  unique:true, requared:true },
        patente:            { type: String, required: true }, 
        sucursal:           { type: ObjectId, ref:'sucursales'}, 
        usuario :           { type: ObjectId, ref:'usuarios'}
    },
    { timestamps: true}
);

const Turno = mongoose.model("turnos", turnoSchemna);

module.exports = Turno;