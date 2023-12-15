const router = require("express").Router();
const TurnoController = require('../controllers/TurnoController'); 

const turnoController = new TurnoController();

router.get("/", (req,res) => { turnoController.getAll(req, res); }); 
router.get("/:fecha", (req,res) => {turnoController.getByFecha(req, res); }); 
router.post( "/", (req, res) => {turnoController.addByUsuarioAndSucursal(req, res); } );
router.put("/:fecha", (req,res) => {turnoController.updateByFecha(req, res); }); 
router.delete("/:fecha", (req,res) => {turnoController.deleteByFecha(req, res); }); 

router.get("/:id/evaluacion/", (req,res) => { turnoController.getAllTurnosLibres(req, res); });  // Puntaje resultante de la evaluacion. 
router.get("/:id/evaluacion/itemsVehiculo/", (req,res) => { turnoController.getAllTurnosLibres(req, res); });  // Detallle de los items evaluados
router.post("/:id/evaluacion/itemsVehiculo/", (req,res) => { turnoController.getAllTurnosLibres(req, res); });  // Carga de items evaluados.
router.put("/:id/evaluacion/itemsVehiculo/", (req,res) => { turnoController.getAllTurnosLibres(req, res); });  // Uptate items evaluados

router.get("/agenda/:limite", (req,res) => { turnoController.getAllLibres(req, res); });  // Tunos libres en agenda. 

//router.patch("/:id", (req,res) => {turnoController.update(req, res); }); 

module.exports = router;