const express = require ("express");

const ItemCalificacionController = require('../controllers/ItemCalificacionController'); 
const itemCalificacionController = new ItemCalificacionController();

const router = express.Router();

router.get("/", (req,res) => { itemCalificacionController.getAll(req, res); }); 
router.get("/:id", (req,res) => {itemCalificacionController.getById(req, res); }); 
router.post( "/", (req, res) => {itemCalificacionController.add(req, res); } );
router.put("/", (req,res) => {itemCalificacionController.update(req, res); }); 
router.delete("/:id", (req,res) => {itemCalificacionController.deleteById(req, res); }); 
//router.patch("/:id", (req,res) => {itemCalificacionController.update(req, res); }); 

 
module.exports = router;