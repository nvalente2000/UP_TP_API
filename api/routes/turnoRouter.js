const router = require("express").Router();
const TurnoController = require('../controllers/TurnoController'); 

const turnoController = new TurnoController();

router.get("/", (req,res) => { turnoController.getAll(req, res); }); 
router.get("/:fecha", (req,res) => {turnoController.getByFecha(req, res); }); 
router.post( "/", (req, res) => {turnoController.addByUsuarioAndSucursal(req, res); } );
router.put("/:fecha", (req,res) => {turnoController.updateByFecha(req, res); }); 
router.delete("/:fecha", (req,res) => {turnoController.deleteByFecha(req, res); }); 

//router.get("/usuarios/:id", (req,res) => {turnoController.getAllByUserId(req, res); }); 
router.get("/libres/", (req,res) => {turnoController.getAllByUserId(req, res); }); 

//router.patch("/:id", (req,res) => {turnoController.update(req, res); }); 

module.exports = router;