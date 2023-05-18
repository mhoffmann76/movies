const express = require("express");
const Controller = require("../controllers/ControllerMovie");
const router = express.Router();

router.get("/cadastrar", Controller.addMovie);
router.post("/cadastrar", Controller.MovieCreate);
router.get("/", Controller.listMovies);
router.get("/update/:id_movie", Controller.UpdateMovie);

router.post("/update", Controller.MovieUpdate);

router.post("/remover", Controller.deleteMovies);

module.exports = router;
