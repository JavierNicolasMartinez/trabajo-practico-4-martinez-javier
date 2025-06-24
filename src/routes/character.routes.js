import express from "express";
import { createCharacter,  deleteCharacter, getCharacter } from "../controllers/character.controllers.js";
const router = express.Router()

router.post("/create", createCharacter);
router.delete("/delete/:id", deleteCharacter);
router.get("/characters", getCharacter)


export default router;