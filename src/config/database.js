import  Sequelize  from "sequelize";
import dotenv from "dotenv";
dotenv.config();

//buscado en sequelize.
export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB,
        dialect: process.env.DB_DIALECT
    },
);

export const startDB = async()=> {
    try {
        await sequelize.authenticate();
        console.log("La conexion se ha realizado con exito.");
        await sequelize.sync();
    } catch (error) {
        console.error("No se pudo realizar la conexón con la base de datos.");
    }
};

