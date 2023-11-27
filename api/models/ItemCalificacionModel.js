const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const itemCalificacionSchema = new Schema( 
    {
        _id:         { type: ObjectId, auto:true } ,
        observacion: { type: String, required: true },
        descripcion: { type: String, required: false }
    },
    { timestamps: true}
);

const ItemCalificacion = mongoose.model("item_calificaciones", itemCalificacionSchema);

module.exports = ItemCalificacion;