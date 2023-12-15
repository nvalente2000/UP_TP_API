const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const itemVehiculoSchema = new Schema( 
    {
        _id:            { type: ObjectId, auto:true } ,
        codigo:         { type: String, required: true },
        descripcion:    { type: String, required: false }, 
        puntaje:        { type: Number, required: true }
    },
    { versionKey:false, timestamps: true }
);

const ItemVehiculo = mongoose.model("itemsVehiculo", itemVehiculoSchema);

module.exports = ItemVehiculo;