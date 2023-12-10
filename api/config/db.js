const mongoose = require("mongoose");

const uri = process.env.MONGODB_URL;

async function main(){

    try {
        await mongoose.connect(uri);
        console.log ("Mongo conecto correctamete");
    } catch (error){
        console.log(`Error: ${error}`); 
    }

}


module.exports = main;