//direcciones de los botones barra superior

const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderHome,renderPaneles, 
        renderInversores, renderBaterias, renderAdicionar, 
        renderAdicionadas } = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/home", renderHome);
router.get("/paneles", renderPaneles);
router.get("/inversores", renderInversores);
router.get("/baterias", renderBaterias);
router.get("/adicionar", renderAdicionar);
router.get("/adicionadas", renderAdicionadas);

module.exports = router;
