const router = require("express").Router();
const TurnoController = require('../controllers/TurnoController'); 

const turnoController = new TurnoController();

router.get("/", (req,res) => { turnoController.getAll(req, res); }); 
router.get("/:fecha", (req,res) => {turnoController.getByFecha(req, res); }); 
router.post( "/", (req, res) => {turnoController.addByUsuarioAndSucursal(req, res); } );
router.put("/:fecha", (req,res) => {turnoController.updateByFecha(req, res); }); 
router.delete("/:fecha", (req,res) => {turnoController.deleteByFecha(req, res); }); 

router.get("/:fecha/itemsVehiculo/", (req,res) => { turnoController.getItemsEvaluadosVehiculo(req, res); });  
router.post("/:fecha/itemsVehiculo/", (req,res) => { turnoController.addItemsEvaluadosVehiculo(req, res); }); 
router.delete("/:fecha/itemsVehiculo/", (req,res) => { turnoController.deleteItemsEvaluadosVehiculo(req, res); });  

router.get("/agenda/:limite", (req,res) => { turnoController.getAllLibres(req, res); });  // Tunos libres en agenda. 

router.get("/:fecha/evaluacion/", (req,res) => { turnoController.getPuntuacion(req, res); });  // Puntaje resultante de la evaluacion. 

module.exports = router;