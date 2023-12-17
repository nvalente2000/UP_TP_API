const express = require ("express");
const {authenticateToken, isAdmin, isEmployee, authorizedRoles, verifyUserReq} = require('../middlewares/authJwt'); 
const UsuarioController = require('../controllers/UsuarioController'); 

const usuarioController = new UsuarioController();

const router = express.Router();

router.get("/", usuarioController.getAll); 
router.get("/:dni", usuarioController.getByDNI); 
router.post( "/", [authenticateToken, verifyUserReq, isAdmin], usuarioController.addUsuario );
router.put("/:dni",[authenticateToken, verifyUserReq, isAdmin], usuarioController.updateByDNI ); 
router.delete("/:dni",[authenticateToken, verifyUserReq, isAdmin], usuarioController.deleteByDNI ); 
router.get("/:dni/turnos",usuarioController.getAllTurnosByDNI ); 
router.post( "/signin", usuarioController.signIn);

module.exports = router;