const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const sucursalSchema = new Schema( 
    {
        _id:         { type: ObjectId, auto:true } ,
        codigo: { type: String, unique:true, required: true },
        descripcion: { type: String, required: false }
    },
    { timestamps: true}
);

const Sucursal = mongoose.model("sucursales", sucursalSchema);

module.exports = Sucursal;