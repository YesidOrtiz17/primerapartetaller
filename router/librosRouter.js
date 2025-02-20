const express = require('express');
const router= express.Router();

const librosController=require("../controller/librosController")
router.get("/libros",librosController.obtenerlibros);
router.post("/libros",librosController.insertarlibros);
router.delete("/libros/:id",librosController.eliminarlibros);
router.put("/libros/:id",librosController.actualizarlibros);
router.get("/libros/:buscarT",librosController.buscarlibros);
module.exports = router;