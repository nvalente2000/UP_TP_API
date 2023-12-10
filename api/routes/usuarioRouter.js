const express = require ("express");

const UsuarioController = require('../controllers/UsuarioController'); 
const usuarioController = new UsuarioController();

const router = express.Router();

router.get("/", (req,res) => { usuarioController.getAll(req, res); }); 
router.get("/:dni", (req,res) => {usuarioController.getByDNI(req, res); }); 
router.post( "/", (req, res) => {usuarioController.add(req, res); } );
router.put("/", (req,res) => {usuarioController.update(req, res); }); 
router.delete("/:dni", (req,res) => {usuarioController.deleteByDNI(req, res); }); 

router.get("/:dni/turnos", (req,res) => {usuarioController.getAllTurnosByDNI(req, res); }); 

//router.patch("/:id", (req,res) => {usuarioController.update(req, res); }); 














/*
      .get("/:id", (req,res) => {      
            const id = parseInt(req.params.id);
            //const user = usersDB.find( (p)=> p.id === id); 
            //if (!user) return res.status(404).json({message:"Usuario no existe"});
            //res.status(200).json(user);
            res.status(200);
            console.log("GET ONE" + id );
      })
                
      .put( "/:id", (req, res) => {
            const id = parseInt(req.params.id);
            const user = usersDB.find( (p)=> p.id === id); 
            if (!user) return res.status(404).json({message:"Usuario no existe"});
           
            user.name = req.body.name;
            user.email = req.body.email;
        
            res.status(200).json(user);    
        } )
        
      .patch( "/:id", (req, res) => {
            const id = parseInt(req.params.id);
            const user = usersDB.find( (p)=> p.id === id); 
            if (!user) return res.status(404).json({message:"Usuario no existe"});
           
            if (req.body.name) user.name = req.body.name ;
            if (req.body.email) user.email = req.body.email;
        
            res.status(200).json(user);    
      } )
        
      .delete( "/:id", (req, res) => {
        
            const id = parseInt(req.params.id);
            const index = usersDB.findIndex( (p)=> p.id === id); 
            if (index===-1) return res.status(404).json({message:"Usuario no existe"});
          
            usersDB.splice(index, 1);
            res.status(200).json(usersDB);    
      } )
        
      .delete( "/", (req, res) => {
            
            // verifico Key
            const userKey = req.query.key; 
            if ( userKey == masterKey ){
                res.status(200).json( { seccess: `Clave correcta`} );
            } 
            else {
                res.status(404).json( { error: `Clave incrrecta`} );
            }
        
      } ); */
 
module.exports = router;