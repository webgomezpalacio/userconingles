import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Reservas = db.define('reservas',{
    fechahora:{
        type: DataTypes.STRING
    },
    nombre:{
        type: DataTypes.STRING
    },
    sucursal_reservas:{
        type: DataTypes.STRING
    },
    telefono:{
        type: DataTypes.STRING
    },
    fecha:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
(async () => {
    await db.sync();
})();
 
export default Reservas;