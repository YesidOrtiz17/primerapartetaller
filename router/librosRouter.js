const express = require('express');
const router= express.Router();

const librosController=require("../controller/librosController")
router.get("/libro",librosController.obtenerlibros);
router.post("/libro",librosController.insertarlibros);
router.delete("/libro/:id",librosController.eliminarlibros);
router.put("/libro/:id",librosController.actualizarlibros);
router.get("/libro/:buscarT",librosController.buscarlibros);
module.exports = router;