import { where } from "sequelize";
import {Character} from "../models/character.model.js";

export const createCharacter = async (req, res) =>{
    const {name, ki, race, gender} = req.body;
    try {
        const character = await character.create(req.body);
        res.status(201).json(character);
    } catch (error) {
        res.status(500).json({error: message.error});
    }
};

export const deleteCharacter = async (req, res) => {
    try {
        const deleted = await Character.destroy({ where: {id: req.params.id}});
        if (deleted) {
            res.json( {message: "El personaje fue eliminado"})
        }else{
            res.status(404).json({message: "El personaje no fue encontrado"});
        }
    } catch (error) {
        res.status(500).json({error: message.error});
        
    }
};

export const getCharacter = async (req, res) => {
try {
    const busquedaId = await Character.findByPk(req.params.id);
    if(busquedaId){
        return res.status(200).json(busquedaId)
    }else{
        return res.status(404).json({errorMessage: "No se encontro el personaje."});
    };
} catch (error) {
    res.status(500).json({error: message.error})
}
}