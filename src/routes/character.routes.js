import express from "express";
import { createCharacter,  updateCharacter, obtenerTodosLosPersonajes, obtenerPorId, deleteCharacter } from "../controllers/character.controllers.js";
const router = express.Router();

router.post("/characters", createCharacter);
router.delete("/characters/:id", deleteCharacter);
router.get("/characters/:id", obtenerPorId);
router.get("/characters", obtenerTodosLosPersonajes);
router.put("/characters/:id", updateCharacter);

export default router;