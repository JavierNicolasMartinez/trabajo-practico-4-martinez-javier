import express from "express";
import { createCharacter,  updateCharacter, obtenerTodosLosPersonajes, obtenerPorId, deleteCharacter } from "../controllers/character.controllers.js";
const router = express.Router();

router.post("/api/characters", createCharacter);
router.delete("/api/characters/:id", deleteCharacter);
router.get("/api/characters/:id", obtenerPorId);
router.get("/api/characters", obtenerTodosLosPersonajes);
router.put("/api/characters/:id", updateCharacter);

export default router;