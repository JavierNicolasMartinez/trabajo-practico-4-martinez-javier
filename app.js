import express from "express";
import dotenv  from "dotenv";
import router from "./src/routes/character.routes.js";
import {startDB}  from "./src/config/database.js";
dotenv.config();


const app = express();
const PORT = process.env.PORT;
app.use(express.json()); //esto me permite leer JSON
app.use("/api", router);

startDB().then(()=>{app.listen(PORT, ()=> {
    console.log("Escuchando en el puerto: ", PORT);
})});
