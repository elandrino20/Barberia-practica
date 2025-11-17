const express = require("express");
const router = express.Router();

const {
  getCitas,
  createCita,
  getCitaById,
  updateCita,
  deleteCita
} = require("../controllers/cita.controllers");

router.get("/", getCitas);
router.post("/", createCita);
router.get("/:id", getCitaById);
router.put("/:id", updateCita);
router.delete("/:id", deleteCita);

module.exports = router;

