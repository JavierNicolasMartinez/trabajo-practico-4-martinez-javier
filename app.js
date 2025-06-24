import dotenv  from "dotenv";
import express from "express";
import characterRoutes from "./src/routes/character.routes.js";
import {startDB}  from "./src/config/database.js";
dotenv.config();


const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/characters", characterRoutes);

app.listen(PORT, async()=> {
    await startDB();
    console.log(`El servidor esta corriendo en: http://localhost:${PORT}/characters`);
});

