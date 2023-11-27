const express = require ("express");

const TurnoController = require('../controllers/TurnoController'); 
const turnoController = new TurnoController();

const router = express.Router();

router.get("/", (req,res) => { turnoController.getAll(req, res); }); 
router.get("/:id", (req,res) => {turnoController.getById(req, res); }); 
router.post( "/", (req, res) => {turnoController.add(req, res); } );
router.put("/", (req,res) => {turnoController.update(req, res); }); 
router.delete("/:id", (req,res) => {turnoController.deleteById(req, res); }); 
router.get("/:id", (req,res) => {turnoController.getById(req, res); }); 

router.get("/usuarios/:id", (req,res) => {turnoController.getAllByUserId(req, res); }); 
router.get("/libres/", (req,res) => {turnoController.getAllByUserId(req, res); }); 

//router.patch("/:id", (req,res) => {turnoController.update(req, res); }); 

module.exports = router;