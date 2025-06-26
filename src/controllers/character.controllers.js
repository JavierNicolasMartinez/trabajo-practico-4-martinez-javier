import { where } from "sequelize";
import Character from "../models/character.model.js";

export const createCharacter = async (req, res) =>{
    if (req.body) {
        for (let valor in req.body){
            if (typeof req.body[valor] === "string") {
                req.body[valor] = req.body[valor].trim();
            }
        }
    }
    
    const {name, ki, race, gender, description} = req.body;
    try {
        if (name === undefined || name === "") return res.status(400).json({Message: "El Nombre no puede estar vacio."});
        if (ki === undefined || ki === "") return res.status(400).json({Message: "El Ki no puede estar vacio."});
        if (race === undefined || race === "") return res.status(400).json({Message: "La Race no puede estar vacio."});
        if (gender === undefined || gender === "") return res.status(400).json({Message: "El Gender no puede estar vacio."});

        const kiEntero = Math.floor(ki);
        if (ki !== kiEntero) return res.status(400).json({Message: "El ki tiene que ser entero."});

        if (gender !== "Female" && gender !== "Male") return res.status(400).json ({Message:"Gender debe ser Female o Male"});

        if (typeof description !== "string") return res.status(400).json({Message: "La description debe ser en string" });
        
        const nombreUnico = await Character.findOne({where: {name}})
        if (nombreUnico) return res.status(400).json({Message: "Nombre ya existente."});

        const character = await Character.create({name, ki, race, gender, description});
        res.status(201).json({Message: "El personaje se ha creado con exito."}, character);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateCharacter = async (req,res) => {
    const {name, ki, race, gender, description} = req.body;

    if (req.body) {
        for (let valor in req.body){
            if (typeof req.body[valor] === "string") {
                req.body[valor] = req.body[valor].trim();
            }
        }
    }
    try {
        // if (name === undefined || name === "") return res.status(400).json({Message: "El Nombre no puede estar vacio."});
        // if (ki === undefined || ki === "") return res.status(400).json({Message: "El Ki no puede estar vacio."});
        // if (race === undefined || race === "") return res.status(400).json({Message: "La Race no puede estar vacio."});
        // if (gender === undefined || gender === "") return res.status(400).json({Message: "El Gender no puede estar vacio."});

       if(name) {     const nombreUnico = await Character.findOne({where: {name}})
        if (nombreUnico) return res.status(400).json({Message: "Nombre ya existente."});}
       
       if(ki){
        const kiEntero = Math.floor(ki);
        if (ki !== kiEntero) return res.status(400).json({Message: "El ki tiene que ser entero."});}

        if(gender){if (gender !== "Female" && gender !== "Male") return res.status(400).json ({Message:"Gender debe ser Female o Male"});}
        
        if(description){
        if (typeof description !== "string") return res.status(400).json({Message: "La description debe ser en string" });}
    

    const [updated] = await Character.update({name, ki, race, gender, description}, {where: {id: req.params.id}});
    if(updated === 0) return res.status(400).json({Message: "El personaje no existe."});

    return res.status(200).json({Message: "Se actualizo el personaje."});
    
    } catch (error) {
      res.status(500).json({error: error.message});
    }
};

export const obtenerTodosLosPersonajes = async(req, res) => {
    try {
        const personajes = await Character.findAll();
        if(personajes.length === 0) return res.json({Message: "No hay nada en la base de datos"});
        return res.json(personajes);
    } catch (error) {
        res.status(500).json({error: message.error});
    }
};

export const obtenerPorId = async(req, res) => {
    try {
        const personaje = await Character.findByPk(req.params.id);
        if(personaje) return res.status(200).json(personaje);
        return res.status(404).json({Message: "El personaje no existe."});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}




export const deleteCharacter = async (req, res) => {
    try {
        const deleted = await Character.destroy({ where: {id: req.params.id}});
        if (deleted > 0) { return res.status(200).json({Message: "El personaje fue eliminado"});
        }else{
            res.status(404).json({Message: "El personaje no fue encontrado"});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
};

// export const getCharacter = async (req, res) => {
// try {
//     const busquedaId = await Character.findByPk(req.params.id);
//     if(busquedaId){
//         return res.status(200).json(busquedaId)
//     }else{
//         return res.status(404).json({errorMessage: "No se encontro el personaje."});
//     };
// } catch (error) {
//     res.status(500).json({error: message.error})
// }
// }