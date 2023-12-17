const router = require("express").Router();
const {authenticateToken, isAdmin, isEmployee, authorizedRoles, verifyUserReq} = require('../middlewares/authJwt'); 
const TurnoController = require('../controllers/TurnoController'); 

const turnoController = new TurnoController();

router.get("/", turnoController.getAll ); 
router.get("/:fecha", turnoController.getByFecha); 
router.post( "/", [authenticateToken, verifyUserReq, isAdmin], turnoController.addByUsuarioAndSucursal );
router.put("/:fecha",[authenticateToken, verifyUserReq, isAdmin], turnoController.updateByFechaAndVerificacionTurnoLibre ); 
router.delete("/:fecha", [authenticateToken, verifyUserReq, isAdmin], turnoController.deleteByFecha ); 

router.get("/agenda/:limite", turnoController.getAllLibres );  // Tunos libres en agenda. 

router.get("/:fecha/itemsVehiculo/", turnoController.getItemsEvaluadosVehiculo );  
router.post("/:fecha/itemsVehiculo/", [authenticateToken, verifyUserReq, isEmployee], turnoController.addItemsEvaluadosVehiculo ); 
router.put("/:fecha/itemsVehiculo/", [authenticateToken, verifyUserReq, isEmployee], turnoController.updateItemsEvaluadosVehiculo ); 
router.delete("/:fecha/itemsVehiculo/", [authenticateToken, verifyUserReq, isEmployee], turnoController.deleteItemsEvaluadosVehiculo );  
router.get("/:fecha/evaluacion/", turnoController.getEvaluacion );  // Puntaje resultante de la evaluacion. 

module.exports = router;