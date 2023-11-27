const mongoose = require("mongoose");

const uri = process.env.MONGODB_URL || "mongodb+srv://nvalente2001:mongo@cluster0.rcws7ng.mongodb.net/TP_API?retryWrites=true&w=majority"; 
const port = process.env.PORT; // || 3000;             

async function main(){

    try {
        await mongoose.connect(uri);
        console.log ("Mongo conecto correctamete");
    } catch (error){
        console.log(`Error: ${error}`); 
    }

}


module.exports = main;