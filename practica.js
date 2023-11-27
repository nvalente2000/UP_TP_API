//import mongoose from 'mongoose';
//import express from "express";  // Importamos express del modulo de "exprees". 
//import bodyParser from "body-parser"; 

const mongoose = require(mongoose);
const bodyParser = require("body-parser"); 

const app = express();          // Creamos una app usando el objeto express. 
const port = 3000;              // Puerto a iniciar el server. 


const uri = "mongodb+srv://nvalente2001:<G52poEQFEu2IvJjJ>@cluster0.rcws7ng.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri); 


app.listen( port, () => {       // Dos Parametros: Port & Callback function. 
                                // Esta funcion inicia el server y llama a callback. 
    console.log(`server Runnig on the port: ${port} `);  // Call back function (anonima)

} );

//----------------------------
// CONSTANTES
//----------------------------
const masterKey = "123";

let usersDB = [
    {
        id: 1, 
        name: "Nico1",
        email:"nico.email1",
    },
    {
        id: 2, 
        name: "Nico2",
        email:"nico.email2",
    },
    {
        id: 3, 
        name: "Nico3",
        email:"nico.email3",
    },
];


//----------------------------
// MIDLEWARE
//----------------------------

app.use(bodyParser.urlencoded( {extended:true}));   // Agregamos body-parser como Midleaware. Maneja varios datos, coloque JSON.
                                                    // El metodo USE es llamada antes que los root hadlers. Es como ponemos un Midleware. 

// Express ya tiene por default BodyParser. No necesito agregarlo. 

//----------------------------
// Ejemplos
//----------------------------

app.get("/", (req,res) => {       // GET HOME PAGE
    res.send("<h1>Hello world !</h1>");
    console.log(req.rawHeaders);
});

app.get("/about", (req,res) => {       // GET HOME PAGE
    res.send("<h1>About</h1><p>Mi nombre es Nicolas</p>");
    console.log(req.rawHeaders);
});

//----------------------------
// Users ABM
//----------------------------
app.get("/users/", (req,res) => {       // GET HOME PAGE
    const offset = req.query.offset;
    const limit = req.query.limit; 
    res.status(200).json(usersDB);
    console.log("GET ALL con limite: " + limit + ". Y offset: " + offset + ".");
});

app.get("/users/:id", (req,res) => {       // GET HOME PAGE
    const id = parseInt(req.params.id);
    const user = usersDB.find( (p)=> p.id === id); 
    if (!user) return res.status(404).json({message:"Usuario no existe"});
    res.status(200).json(user);
    console.log("GET ONE" + id );
});

app.post( "/users", (req, res) => {
    const newId = usersDB.length + 1;
    const userPost= {
        id: newId, 
        name: req.body.name,
        email:req.body.email,
    };
    usersDB.push(userPost);
    console.log(userPost);
    res.status(201).json(usersDB); 
} ); 

app.put( "/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = usersDB.find( (p)=> p.id === id); 
    if (!user) return res.status(404).json({message:"Usuario no existe"});
   
    user.name = req.body.name;
    user.email = req.body.email;

    res.status(200).json(user);    
} ); 

app.patch( "/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = usersDB.find( (p)=> p.id === id); 
    if (!user) return res.status(404).json({message:"Usuario no existe"});
   
    if (req.body.name) user.name = req.body.name ;
    if (req.body.email) user.email = req.body.email;

    res.status(200).json(user);    
} ); 

app.delete( "/users/:id", (req, res) => {

    const id = parseInt(req.params.id);
    const index = usersDB.findIndex( (p)=> p.id === id); 
    if (index===-1) return res.status(404).json({message:"Usuario no existe"});
  
    usersDB.splice(index, 1);
    res.status(200).json(usersDB);    
} ); 

app.delete( "/users/", (req, res) => {
    
    // verifico Key
    const userKey = req.query.key; 
    if ( userKey == masterKey ){
        res.status(200).json( { seccess: `Clave correcta`} );
    } 
    else {
        res.status(404).json( { error: `Clave incrrecta`} );
    }

} ); 

