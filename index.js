import express from "express";  // Importamos express del modulo de "exprees". 
import bodyParser from "body-parser"; 

const app = express();          // Creamos una app usando el objeto express. 
const port = 3000;              // Puerto a iniciar el server. 

app.listen( port, () => {       // Dos Parametros: Port & Callback function. 
                                // Esta funcion inicia el server y llama a callback. 
    console.log("server Runnig on the port: " + port);  // Call back function (anonima)

} );

//app.use(bodyParser.urlencoded( {extended:true}));   // Agregamos body-parser como Midleaware. Maneja varios datos, coloque JSON.
                                                    // El metodo USE es llamada antes que los root hadlers. Es como ponemos un Midleware. 

app.get("/", (req,res) => {       // GET HOME PAGE
    res.send("<h1>Hello world !</h1>");
    console.log(req.rawHeaders);
});

app.get("/about", (req,res) => {       // GET HOME PAGE
    res.send("<h1>About</h1><p>Mi nombre es Nicolas</p>");
    console.log(req.rawHeaders);
});

// Users
app.get("/users/", (req,res) => {       // GET HOME PAGE
    res.sendStatus(200);
});

app.get("/users?{id}", (req,res) => {       // GET HOME PAGE
    res.sendStatus(200);
});

app.post( "/users", (req, res) => {
    console.log(req.body);
    res.sendStatus(201); 
} ); 

app.put( "/users", (req, res) => {
    res.sendStatus(200); 
} ); 

app.patch( "/users", (req, res) => {
    res.sendStatus(200); 
} ); 

app.delete( "/users", (req, res) => {
    res.sendStatus(200); 
} ); 


