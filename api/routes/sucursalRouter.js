const express = require ("express");

const SucursalController = require('../controllers/SucursalController'); 
const sucursalController = new SucursalController();

const router = express.Router();

router.get("/", (req,res) => { sucursalController.getAll(req, res); }); 
router.get("/:codigo", (req,res) => {sucursalController.getByCodigo(req, res); }); 
router.post( "/", (req, res) => {sucursalController.add(req, res); } );
router.put("/:codigo", (req,res) => {sucursalController.updateByCodigo(req, res); }); 
router.delete("/:codigo", (req,res) => {sucursalController.deleteByCodigo(req, res); }); 

router.get("/:codigo/turnos", (req,res) => {sucursalController.getAllTurnosByCodigo(req, res); }); 


//router.patch("/:id", (req,res) => {itemCalificacionController.update(req, res); }); 

module.exports = router;