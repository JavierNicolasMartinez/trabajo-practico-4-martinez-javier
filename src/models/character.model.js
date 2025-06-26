import {DataTypes} from "sequelize";
import { sequelize } from "../config/database.js";

const Character = sequelize.define("character",{
    id:{
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    ki:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    race:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    gender:{
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
    }
});

export default Character;