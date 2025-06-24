import {Character} from "../models/character.model.js";

export const crearCharacter = async (req, res) =>{
    const {name, ki, race, gender} = req.body;
    try {
        const character = await character.create(req.body);
        res.status(201).json(character);
    } catch (error) {
        res.status(500).json({error: MessageChannel.error});
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