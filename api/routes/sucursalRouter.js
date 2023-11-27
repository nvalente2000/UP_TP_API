const express = require ("express");

const SucursalController = require('../controllers/SucursalController'); 
const sucursalController = new SucursalController();

const router = express.Router();

router.get("/", (req,res) => { sucursalController.getAll(req, res); }); 
router.get("/:id", (req,res) => {sucursalController.getById(req, res); }); 
router.post( "/", (req, res) => {sucursalController.add(req, res); } );
router.put("/", (req,res) => {sucursalController.update(req, res); }); 
router.delete("/:id", (req,res) => {sucursalController.deleteById(req, res); }); 
//router.patch("/:id", (req,res) => {itemCalificacionController.update(req, res); }); 

module.exports = router;