const router = require("express").Router();

router.use("/usuarios", require("./usuarioRouter"));
router.use("/turnos", require("./turnoRouter"));
router.use("/sucursales", require("./sucursalRouter"));

module.exports = router;