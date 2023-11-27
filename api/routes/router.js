const router = require("express").Router();

router.use("/usuarios", require("./usuarioRouter"));
router.use("/turnos", require("./turnoRouter"));
router.use("/itemsCalificados", require("./itemCalificacionRouter"));

module.exports = router;