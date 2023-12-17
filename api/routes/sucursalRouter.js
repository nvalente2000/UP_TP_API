const express = require ("express");
const {authenticateToken, isAdmin, isEmployee, authorizedRoles, verifyUserReq} = require('../middlewares/authJwt'); 
const SucursalController = require('../controllers/SucursalController'); 
const sucursalController = new SucursalController();

const router = express.Router();

router.get("/",  sucursalController.getAll); 
router.get("/:codigo", sucursalController.getByCodigo); 
router.post( "/", [authenticateToken, verifyUserReq, isAdmin], sucursalController.add );
router.put("/:codigo", [authenticateToken, verifyUserReq, isAdmin], sucursalController.updateByCodigo); 
router.delete("/:codigo", [authenticateToken, verifyUserReq, isAdmin], sucursalController.deleteByCodigo ); 
router.get("/:codigo/turnos", sucursalController.getAllTurnosByCodigo ); 

module.exports = router;