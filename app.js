import express from "express";



const PORT = process.env.PORT;
const app = express();
app.use(express.json());