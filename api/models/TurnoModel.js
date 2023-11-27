const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const turnoSchemna = new Schema( 
    {
        _id:                { type: ObjectId, auto:true } ,
        fecha :             { type: Date, requared:true },
        patente:            { type: String, required: true }, 
        //itemsCalificadosId: { type: ObjectId, ref:'item_calificaciones' }, 
        usuario :           { type: ObjectId, ref:'usuarios'}
    },
    { timestamps: true}
);

const Turno = mongoose.model("turnos", turnoSchemna);

module.exports = Turno;