const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const roleSchema = new Schema( 
    {
        _id:            { type: ObjectId, auto:true } ,
        nombre:         { type: String, unique:true, required: true },
        descripcion:    { type: String, required: false }
    },
    { versionKey:false, timestamps: true }
);

const Role = mongoose.model("roles", roleSchema);

module.exports = Role;