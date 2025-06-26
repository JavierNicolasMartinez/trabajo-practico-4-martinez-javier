import express from "express";
import { createCharacter,  updateCharacter, obtenerTodosLosPersonajes, obtenerPorId, deleteCharacter } from "../controllers/character.controllers.js";
const router = express.Router();

router.post("/characters", createCharacter); //Crear un nuevo personaje
router.delete("/characters/:id", deleteCharacter); //Eliminar un personaje
router.get("/characters/:id", obtenerPorId); //Devolver un personaje por su ID
router.get("/characters", obtenerTodosLosPersonajes); //Devolver todos los personajes registrados
router.put("/characters/:id", updateCharacter); //Actualizar los datos de un personaje

export default router;